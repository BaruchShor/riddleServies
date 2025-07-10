import { readPlayerData, writeToPlayerData } from "./fsDal.js";

export async function readPlayers(){
    return await readPlayerData();
};

export async function createPlayer(obj) {
    const data = await readPlayers();
    data.push(obj);
    console.log(data);
    await writeToPlayerData(data);
}

export async function updatePlayer(upObj) {
    const data = await readPlayers();
    if(data != []){
        let updatedPlayer = data.find(obj => obj.id === upObj.idParameter);    
        updatedPlayer[upObj.parameterToChange] = upObj.newParameter;
        await writeToPlayerData(data);
    }
}

export async function deletePlayer(id){
    const data = await readPlayers();
    if(data != []){
        const indexToDel = data.findIndex(obj => obj.id == id);
        data.splice(indexToDel, 1);
        await writeToPlayerData(data);
    }
};

export default {readPlayers, createPlayer, updatePlayer, deletePlayer}