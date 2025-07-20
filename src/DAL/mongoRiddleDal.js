import mongoClient, { mongoConnect } from "../../DB/riddlesDB.js";

await mongoConnect();

const RiddlesDB = mongoClient.db('Riddles');
const collection = RiddlesDB.collection('riddles');


async function readRiddle() {
    try{
        return await collection.find().toArray();
        // return 'Seccess'
    }catch(error){
        return {Success: false, message : error.message};
    }
};

export async function createRiddle(Obj) {
    try{
        await collection.insertOne(Obj);
        return {Success: true, message : "Riddle is created successfully."};
    }catch(error){
        return {Success: false, message : error.message};
    }
};

export async function updateRiddle(filterObj, updateObj) {
    try{
        await collection.findOneAndUpdate(filterObj, {$set : updateObj});
        return {Success: true, message : "Riddle is updated successfully."}
    }catch(error){
        return {Success: false, message : error.message};
    }
};

export async function replaseRiddle(filterObj, updateObj) {
    try{
        await collection.findOneAndReplace(filterObj, updateObj);
        return {Success: true, message : "Riddle is replased successfully."}
    }catch(error){
        return {Success: false, message : error.message};
    }
};

export async function deleteRiddle(Obj) {
    try{
        await collection.deleteOne(Obj);
        return {Success: true, message : "Riddle is deleted successfully."}
    }catch(error){
        return {Success: false, message : error.message};
    }
};

export default {readRiddle, createRiddle, updateRiddle, replaseRiddle, deleteRiddle}
