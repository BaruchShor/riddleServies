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
    const action = await riddleCrud.createRiddle(req.body);
    res.status(201).send(action);
  } catch (err) {
    res.status(err.status || 500).send(err.message || "Server internal error!");
  }
});

router.put("/", async (req, res) => {
  try {
    const action = await riddleCrud.updateRiddle(req.body);
    res.status(201).send(action);
  } catch (err) {
    res.status(err.status || 500).send(err.message || "Server internal error!");
  }
});

router.delete("/", async (req, res) => {
  try {
    const action = await riddleCrud.deletRiddle(req.body);
    res.status(201).send(action);
  } catch (err) {
    res.status(err.status || 500).send(err.message || "Server internal error!");
  }
});

export default router;
