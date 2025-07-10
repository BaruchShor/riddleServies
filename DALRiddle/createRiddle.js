import readRiddle from "./readRiddle.js";
import { writeToRiddleData } from "../RiddleDataConnection/RiddleDataConnection.js";

export default async function createRiddle(newRiddle){
        let data = await readRiddle();
        data.push(newRiddle);
        await writeToRiddleData(data);
};