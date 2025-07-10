import { readRiddleData, writeToRiddleData } from "./fsDal.js";

export async function readRiddle(){
    console.log("OK");
    return await readRiddleData();
};

export async function createRiddle(newRiddle){
        let data = await readRiddle();
        data.push(newRiddle);
        await writeToRiddleData(data);
};

export async function updateRiddle(upObj){
    let data = await readRiddle();
    if(data != []){
        let updatedRiddle = data.find(obj => obj.id === upObj.idParameter);    
        updatedRiddle[upObj.parameterToChange] = upObj.newParameter;
        await writeToRiddleData(data);
    }
};

export async function deletRiddle(id){
    const data = await readRiddle();
    if(data != []){
        const indexToDelete = data.findIndex(obj => obj.id === id);
        data.splice(indexToDelete,1);
        await writeToRiddleData(data);
    }
};

export default {readRiddle, createRiddle, updateRiddle, deletRiddle};