import dotenv from "dotenv";
dotenv.config();

import { MongoClient } from "mongodb";

const mongoClient = new MongoClient(process.env.MONGODB_URI);

export const mongoConnect = async () => {
    try{
        await mongoClient.connect();
        console.log("Connect to DB.")
    }catch(error){
        console.log(error.message);
    }
}

export default mongoClient;