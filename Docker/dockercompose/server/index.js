import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
const app=express()
app.use((req,res,next)=>{
    console.log("this is a middleware");
    next();
})
app.get('/',(req,res)=>{
    res.send("this is my first work");
})
app.listen(process.env.PORT,()=>{
    console.log("Actual writing of server port listening")
})