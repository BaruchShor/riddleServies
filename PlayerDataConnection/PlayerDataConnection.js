import fs from "node:fs/promises";

export async function readPlayerData(){
    try{
    const data = await fs.readFile("./DB/playersDataBase.txt", "utf-8");
    if(data){
        return JSON.parse(data);
    }
    return [];
    }catch(err){
        return err.message
    }
};

export async function writeToPlayerData(data){
    await fs.writeFile("./DB/playersDataBase.txt", JSON.stringify(data), "utf-8");
};