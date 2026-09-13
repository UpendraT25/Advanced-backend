import express from 'express'
const app=express();
app.post('/',(req,res)=>{
    console.log("this is a home page")
    console.log("reddis api catching")
})
app.listen(4000,()=>{
    console.log("this is redis catching strategies")
})