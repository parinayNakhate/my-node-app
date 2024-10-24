import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./contants.js";
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})

connectDB()






















//1st approach


/* import express from "express"
const app=express()

//EFFi
(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error",(error)=>{
            console.error("Error:",error);
            throw error;
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App listen in port ${process.env.PORT}`)
        })
        
    }catch(error){
        console.error("ERROR:",error)
        throw error
    }
})() */