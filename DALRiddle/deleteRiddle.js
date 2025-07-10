import readRiddle from "./readRiddle.js";
import { writeToRiddleData } from "../RiddleDataConnection/RiddleDataConnection.js";


export default async function deletRiddle(id){
    const data = await readRiddle();
    if(data != []){
        const indexToDelete = data.findIndex(obj => obj.id === id);
        data.splice(indexToDelete,1);
        await writeToRiddleData(data);
    }
};