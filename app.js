const express =require("express");
const app=express();
const cors=require("cors");
const connection = require("./db")
const CREATE=require("./CRUD/CREATE")
const READ=require("./CRUD/READ")
const UPDATE=require("./CRUD/UPDATE")
const DELETE =require("./CRUD/DELETE")
connection();

app.use(express.json())
app.use(cors())


app.use("/api/product/create",CREATE)
app.use("/api/product",READ);
app.use(UPDATE)
app.use(DELETE)
port=process.env.PORT||3000
app.listen(port,()=>{
    console.log("Serving is running on port 3000")
})