import mongoClient, { mongoConnect } from "./DB/db.js";

await mongoConnect();

const RiddlesDB = mongoClient.db('Riddles');
const collection = RiddlesDB.collection('riddles');


async function readRiddle() {
    try{
        return await collection.find().toArray();
        // return 'Seccess'
    }catch(error){
        return "Seccess";
    }
};

export async function createRiddle(Obj) {
    try{
        await collection.insertOne(Obj);
        return 'Seccess'
    }catch(error){
        return error.message;
    }
};

export async function updateRiddle(filterObj, updateObj) {
    try{
        await collection.findOneAndUpdate(filterObj, {$set : updateObj});
        return 'Seccess'
    }catch(error){
        console.log(error)
        return error.message;
    }
};

export async function replaseRiddle(filterObj, updateObj) {
    try{
        await collection.findOneAndReplace(filterObj, updateObj);
        return 'Seccess'
    }catch(error){
        console.log(error)
        return error.message;
    }
};

export async function deleteRiddle(Obj) {
    try{
        await collection.deleteOne(Obj);
        return 'Seccess'
    }catch(error){
        return error.message;
    }
};

export default {readRiddle, createRiddle, updateRiddle, replaseRiddle, deleteRiddle}
