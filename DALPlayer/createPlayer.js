import readPlayers from "./readPlayer.js";
import { writeToPlayerData } from "../PlayerDataConnection/PlayerDataConnection.js";

export default async function createPlayer(obj) {
    const data = await readPlayers();
    data.push(obj);
    console.log(data);
    await writeToPlayerData(data);
}