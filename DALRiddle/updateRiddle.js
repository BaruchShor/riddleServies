import fs from "node:fs/promises";
import readlineQuestion from "../classes/readline.js";
import { readRiddle } from "./readRiddle.js";

function updateRiddle(data){
    const idParameter = readlineQuestion("Enter the id for obj to update.\n");
    const parameterToChange = readlineQuestion("Which parameter do you want to update?.\n");
    const newParameter = readlineQuestion("Enter the new value.\n");    
    let updatedRiddle = data.find(obj => obj.id === idParameter);    
    updatedRiddle[parameterToChange] = newParameter;
    fs.writeFile("RiddleCRUD/riddlesDataBase.txt", JSON.stringify(data));
}

readRiddle().then(data => updateRiddle(data)).catch(err => console.log(err));