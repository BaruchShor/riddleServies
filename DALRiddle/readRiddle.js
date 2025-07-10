import { readRiddleData } from "../RiddleDataConnection/RiddleDataConnection.js";

export function showData(data){
    console.log(data);
}

export default async function readRiddle(){
    return await readRiddleData();
};