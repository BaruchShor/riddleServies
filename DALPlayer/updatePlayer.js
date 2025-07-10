import readPlayers from "./readPlayer.js";
import { writeToPlayerData } from "../PlayerDataConnection/PlayerDataConnection.js";

export default async function updatePlayer(upObj) {
    const data = await readPlayers();
    if(data != []){
        let updatedPlayer = data.find(obj => obj.id === upObj.idParameter);    
        updatedPlayer[upObj.parameterToChange] = upObj.newParameter;
        await writeToPlayerData(data);
    }
}