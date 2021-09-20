// 
const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config()

app.use("/saj", (req, res)=>{
    console.log("Hello respone nodemon backend data! facebook page: sajjad sadiq");
})

app.listen("5000", ()=>{
    console.log("backend is running");
})
