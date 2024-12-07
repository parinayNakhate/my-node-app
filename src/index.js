import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path:'./.env'
})

connectDB().then(()=>{
    app.on("error",(error)=>{
        console.error("Error:",error);
        throw error;
    })
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at port ${process.env.PORT}`)
    })
}).catch((err)=>{
    console.log("MongoDB CONNECTION FAILED!!!!",err);
})






















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