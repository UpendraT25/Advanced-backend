// const http=require('http');
// const server=http.createServer((req,res)=>{
//     if(req.url=='/'&&req.method=='GET'){
//         res.writeHead(200,{'content-type':'application/json'})
//         res.end(JSON.stringify({
//             message:'Welcome to the home page'
//         }))
//     }
//     if(req.url=='/about'&&req.method=='GET'){
//         res.writeHead(200,{'content-type':'application/json'})
//         res.end(JSON.stringify({
//             message:'About page'
//         }))
//     }

//     if(req.url=='/contact'&&req.method=='GET'){
//         res.writeHead(200,{'content-type':'application/json'})
//         res.end(JSON.stringify({
//             message:"Contact page"
//         }))
//     }

//     res.writeHead(404,{'content-type':'application/json'})
//     res.end(JSON.stringify({
//         message:'servieces are not available'
//     }))
// })
// const port=5000;
// server.listen(port,()=>{
//     console.log(`server is running on ${port}`);
// })


// const express=require('express')
// const app=express();

// app.get('/',(req,res)=>{
//     res.status(200).json({data:"home page"})
// })

// app.get('/about',(req,res)=>{
//     res.status(200).json({message:"about page"})
// })

// app.listen(5000,()=>{
//     console.log('running on port 5000')
// })

// for the purpose of differentiating reading file synchronously and asynchronously
const fs=require('fs');
const express=require('express')
const app=express();

app.get('/sync',(req,res)=>{
    fs.readFileSync('a.txt','utf-8',(err,data)=>{
        console.log(data);
    });
    res.status(200).json({message:"synchronous endpoint"})
})
app.get('/async',(req,res)=>{
    fs.readFile('a.txt',(err,data)=>{
        console.log(data);
    });
    res.status(200).json({message:"asynchronous endpoint"})
})


app.listen(5000,()=>{
    console.log('running on 5000 port')
})