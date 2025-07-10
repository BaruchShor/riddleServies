import readPlayers from "./readPlayer.js";
import { writeToPlayerData } from "../PlayerDataConnection/PlayerDataConnection.js";

export default async function deletePlayer(id){
    const data = await readPlayers();
    if(data != []){
        const indexToDel = data.findIndex(obj => obj.id == id);
        data.splice(indexToDel, 1);
        await writeToPlayerData(data);
    }
};