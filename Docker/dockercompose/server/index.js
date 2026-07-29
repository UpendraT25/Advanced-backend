import express from 'express'
const app=express()
app.use((req,res,next)=>{
    console.log("this is a middleware");
    next();
})
app.get('/',(req,res)=>{
    res.send("this is my first work");
})
app.listen(5000,()=>{
    console.log("Actual writing of server port listening")
})