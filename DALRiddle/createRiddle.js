import readlineQuestion from "../classes/readline.js";
import fs from "node:fs/promises";
import { readRiddle } from "./readRiddle.js";

function getNewRiddle(){
    const newRiddle = {
        id: 2,
        level : "",
        name : "",
        taskDescription : "",
        correctAnswer : "",
        getLevel: function(){
        do{
            this.level = readlineQuestion(`Pleas the level, from 1 to 3.`);
        }while(this.level < 1 || this.level > 3);
            return this.level;
        },
        getName: function(){
            if(this.level == 1){
                this.name = "Easy Math";
            }else if(this.level == 2){
                this.name = "Medume";
            }else{
                this.name = "Difficult";
            }
        },
        getRiddle:function(){
            this.taskDescription = readlineQuestion("Please Enter the new riddle\n");
        },
        getcorrectAnswer: function(){
            this.correctAnswer = readlineQuestion("Please enter the correct answer.");
        }
    }
    newRiddle.getLevel();
    newRiddle.getName();
    newRiddle.getRiddle();
    newRiddle.getcorrectAnswer();
    return newRiddle;
}


export function createRiddle(data){
    data.push(getNewRiddle())
    fs.writeFile("RiddleCRUD/riddlesDataBase.txt",JSON.stringify(data));
}

readRiddle().then(data => createRiddle(data)).catch(err => console.log(err));