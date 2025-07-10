import express from "express";
import riddleCrud from "../DAL/riddleDal.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await riddleCrud.readRiddle();
    res.status(200).send(data);
  } catch (err) {
    res.status(err.status || 500).send(err.message || "Server internal error!");
  }
});

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const result = await riddleCrud.createRiddle(req.body);
    console.log(result)
    res.status(201).send(result);
  } catch (err) {
    res.status(err.status || 500).send(err.message || "Server internal error!");
  }
});

router.put("/", async (req, res) => {
  try {
    res.status(201).send(await riddleCrud.updateRiddle(req.body));
  } catch (err) {
    res.status(err.status || 500).send(err.message || "Server internal error!");
  }
});

router.delete("/", async (req, res) => {
  try {
    res.status(201).send(await riddleCrud.deletRiddle(req.body));
  } catch (err) {
    res.status(err.status || 500).send(err.message || "Server internal error!");
  }
});

export default router;
