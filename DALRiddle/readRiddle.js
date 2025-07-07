import fs from "node:fs";

export function showData(data){
    console.log(data);
}

export function readRiddle(){
    return new Promise((res, rej) => {
        fs.readFile("RiddleCRUD/riddlesDataBase.txt", "utf-8", (error, data) => {
            if(error){
                rej(error)
            }
            try{
                data = JSON.parse(data);
                const information = data.map( obj => {
                    if(typeof obj === "string"){
                        return JSON.parse(obj)
                    }else{
                        return obj;
                    }
                });
                res(information);
            }catch{
                rej(error);
            }
        });
    });
};