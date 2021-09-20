// 
const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const authRoutes = require('./Routes/Auth')
const addPosts = require('./Routes/Post')


dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL,{
})
.then(console.log("connneted to MongoDB"))
.catch(error => console.log(error));

app.use("/auth", authRoutes)
app.use("/posts", addPosts)

app.listen("5000", ()=>{
    console.log("backend is running");
})
