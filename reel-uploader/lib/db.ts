import mongoose from "mongoose";

const MONGODB_URI=process.env.MONGODB_URL;

if(!MONGODB_URI){
    throw new Error("Please define Mongo Db uri in env file");
}

let cached= global.mongoose

if(!cached){
    cached=global.mongoose={conn=null,promise=null}
}