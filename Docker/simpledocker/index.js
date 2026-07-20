import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const port=process.env.PORT||4000
const app=express()

app.get("/",(req,res)=>{
    return res.status(400).json({message:"this is docker first container"})
})

app.get("/laddu",(req,res)=>{
    return res.status(400).json({message:"laddu the power hatters"})
})
app.listen(port,()=>{
    console.log("this is running on server.")
})