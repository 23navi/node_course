const express=require("express");
require("./db/mongoose");
const User=require("./models/user");
const Task=require("./models/task");

const userRouter=require("./routers/user")
const tastRouter=require("./routers/task")
const { resolve } = require("mongodb/lib/core/topologies/read_preference");

const PORT= process.env.PORT || 3000;

const app=express();
app.use(express.json());
app.use(userRouter);
app.use(tastRouter);

app.get("/",(req,res)=>{
    res.send("hello");
})


app.listen(PORT,()=>{
    console.log("App up and running on port ",PORT);
})

