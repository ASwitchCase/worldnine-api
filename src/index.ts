import { UserRoutes } from "./Routes/api/UserRoute";

const express = require('express')
const app = express();
app.use(express.json())
app.get('/',async(req,res)=>{
    res.send("hello world")
})

app.use("/users",UserRoutes)

app.listen(3000,() =>{
    console.log("Listening...")
})