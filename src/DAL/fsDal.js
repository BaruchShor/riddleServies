import fs from "node:fs";
import fsPromises from "node:fs/promises"

export async function readPlayerData(){
    try{
    const data = await fsPromises.readFile("./DB/playersDataBase.txt", "utf-8");
    if(data){
        return JSON.parse(data);
    }
    return [];
    }catch(err){
        return err.message
    }
};

export async function writeToPlayerData(data){
    await fsPromises.writeFile("./DB/playersDataBase.txt", JSON.stringify(data), "utf-8");
};

export function readRiddleData(){
    return new Promise((res, rej) => {
        fs.readFile("./DB/riddlesDataBase.txt", "utf-8", (error, data) => {
            if(error){
                rej(error)
            }
            try{
                data.trim() ? data = JSON.parse(data) : data = [];
                const information = data.map( obj => {
                    if(typeof obj === "string"){
                        return JSON.parse(obj)
                    }else{
                        return obj;
                    }
                });
                res(information);
            }catch(error){
                rej(error);
            }
        });
    });
};

export async function writeToRiddleData(data){
    await fsPromises.writeFile("./DB/riddlesDataBase.txt", JSON.stringify(data), "utf-8");
};

