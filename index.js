const express = require('express');
const app = express()


app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Welcome To E-Learning Platform")
})

app.listen(5000,()=>{
    console.log("Server is running on http://127.0.0.1:5000");
})