import { readPlayerData } from "../PlayerDataConnection/PlayerDataConnection.js";

export default async function readPlayers(){
    return await readPlayerData();
};
