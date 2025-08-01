import express from "express";
//import playerCrud from "../DAL/playerDal.js";
import playerCrud from "../DAL/supabasePlayerDal.js";
import auth from "../../middleWare/auth.js";

const router = express.Router();

router.get('/',async (req, res) => {
    try{
        const data = await playerCrud.readPlayers();
        res.status(200).send(data);
    }catch(err){
        res.status(err.status || 500).json({error : err.message} || {error : "Server internal error!"});
    }
});

router.get('/name/:name',async (req, res) => {
    try{
        const { name } = req.params;
        const data = await playerCrud.readByName(name);
        if (!data) {
            return res.status(404).json({ error: "Player not found" });
        }
        res.status(200).send(data);
    }catch(err){
        res.status(err.status || 500).json({error : err.message} || {error : "Server internal error!"});
    }
});

router.get('/top',async (req, res) => {
    try{
        const data = await playerCrud.getTopRecord();
        if (!data) {
            return res.status(404).json({ error: "Player not found" });
        }
        res.status(200).send(data);
    }catch(err){
        res.status(err.status || 500).json({error : err.message} || {error : "Server internal error!"});
    }
});

router.post('/', async (req, res) => {
    try{
        const action = await playerCrud.createPlayer(req.body)
        res.status(201).send(action);
    }catch(err){
        res.status(err.status || 500).json({error : err.message} || {error : "Server internal error!"});
    }
});

router.put('/',auth(['admin', 'user']), async (req, res) => {
    try{
        const action = await playerCrud.updatePlayer(req.body.filter, req.body.update)
        res.status(200).send(action);
    }catch(err){
        res.status(err.status || 500).json({error : err.message} || {error : "Server internal error!"});
    };
});

router.delete('/',auth(['admin']), async (req, res) => {
    try{
        const action = await playerCrud.deletePlayer(req.body.id)
        res.status(200).send(action);
    }catch(err){
        res.status(err.status || 500).json({error : err.message} || {error : "Server internal error!"});
    }
});

export default router; 