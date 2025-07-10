import readRiddle from "./readRiddle.js";
import { writeToRiddleData } from "../RiddleDataConnection/RiddleDataConnection.js";


export default async function updateRiddle(upObj){
    let data = await readRiddle();
    if(data != []){
        let updatedRiddle = data.find(obj => obj.id === upObj.idParameter);    
        updatedRiddle[upObj.parameterToChange] = upObj.newParameter;
        await writeToRiddleData(data);
    }
};