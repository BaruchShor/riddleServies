import fs from "node:fs/promises";
import readlineQuestion from "../classes/readline.js";
import { readRiddle } from "./readRiddle.js";

function deletRiddle(data){
    const id = readlineQuestion("Enter the id for delete.")
    const indexToDelete = data.findIndex(obj => obj.id === id);
    data.splice(indexToDelete,1);
    console.log(data);
    
    fs.writeFile("RiddleCRUD/riddlesDataBase.txt", JSON.stringify(data));
}

readRiddle().then(data => deletRiddle(data)).catch(err => console.log(err));