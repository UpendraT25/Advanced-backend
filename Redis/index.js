import express from 'express'
const app=express();
app.post('/',(req,res)=>{
    console.log("this is a home page")
})
app.listen(4000,()=>{
    console.log("this is call back")
})