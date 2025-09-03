import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crudPlayer from "../DAL/supabasePlayerDal.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const { name, id, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 12);
    const user = {
      name: name,
      id: id,
      password_hash: hashPassword,
    };
    const data = await crudPlayer.createPlayer(user);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/login", async (req, res) => {
  try {
    const [user] = await crudPlayer.readByName(req.body.name);
    if (!user) {
      res.status(403).json("user not found.");
      return;
    }
    const passwordMatch = await bcrypt.compare(
      req.body.password,
      user.password_hash
    );
    if (!passwordMatch) return res.status(403).json("Connect is faild. 456");
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.SECRET,
      {
        expiresIn: "1h",
      }
    );
    res
      .cookie("token", token, { httpOnly: true, sameSite: true })
      .send({ message: "Log in successfully", token });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

export default router;
