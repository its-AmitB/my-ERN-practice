import express from 'express'

import {MongoClient} from 'MongoDB';

const dbName="test";
const db_url="mongodb://localhost:27017";

const app=express();
app.set("view engine","ejs");

app.get('/',(req,res)=>{
  // res.send("<h1>This is home page</h1>");
  res.render("form");
})
const client=new MongoClient(db_url);


app.get('/add',async(req,res)=>{
  const data= await connectDB();
  // res.send("DATA added");
  res.render("userDisplay",{usersData:data});
})

const PORT=3005;
app.listen(PORT,()=>{
  console.log(`Server is Running at http://localhost:${PORT}`);
})