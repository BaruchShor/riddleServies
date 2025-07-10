import express from "express";
import playerCrud from "../DALPlayer/exportPlayerCrud.js"

const router = express.Router();

router.get('/',async (req, res) => {
    try{
        res.status(201).send(await playerCrud.readPlayers());
    }catch(err){
        res.status(err.status || 500).send(err.message || "Server internal error!");
    }
})

router.post('/',async (req, res) => {
    try{
        res.status(201).send(await playerCrud.createPlayer(req.body));
    }catch(err){
        res.status(err.status || 500).send(err.message || "Server internal error!");
    }
})

router.put('/',async (req, res) => {
    try{
        res.status(201).send(await playerCrud.updatePlayer(req.body));
    }catch(err){
        res.status(err.status || 500).send(err.message || "Server internal error!");
    }
})

router.delete('/',async (req, res) => {
    try{
        res.status(201).send(await playerCrud.deletePlayer(req.body));
    }catch(err){
        res.status(err.status || 500).send(err.message || "Server internal error!");
    }
})

export default router; 