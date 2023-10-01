const express = require("express");
const dotenv = require("dotenv");
const app = express();
const mongoose  = require("mongoose");
const userRouter = require("./router/user");
const postRouter = require("./router/post")
dotenv.config();
mongoose.connect(process.env.MONGODB).then(()=>
{
    console.log("Connected to DB");

}).catch(()=>{
    console.log("Connection to DB unsuccessful!");
})

app.use(express.json());
app.use('/api/user', userRouter);
app.use('/api/post', postRouter);
app.listen(5000,()=>{
    console.log("Server is running");
})
