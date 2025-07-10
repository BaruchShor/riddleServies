import express from "express";
import playerCrud from "../DAL/playerDal.js"

const router = express.Router();

router.get('/',async (req, res) => {
    try{
        const data = await playerCrud.readPlayers();
        res.status(201).send(data);
    }catch(err){
        res.status(err.status || 500).send(err.message || "Server internal error!");
    }
})

router.post('/',async (req, res) => {
    try{
        const action = await playerCrud.createPlayer(req.body)
        res.status(201).send(action);
    }catch(err){
        res.status(err.status || 500).send(err.message || "Server internal error!");
    }
})

router.put('/',async (req, res) => {
    try{
        const action = await playerCrud.updatePlayer(req.body)
        res.status(201).send(action);
    }catch(err){
        res.status(err.status || 500).send(err.message || "Server internal error!");
    }
})

router.delete('/',async (req, res) => {
    try{
        const action = await playerCrud.deletePlayer(req.body)
        res.status(201).send(action);
    }catch(err){
        res.status(err.status || 500).send(err.message || "Server internal error!");
    }
})

export default router; 