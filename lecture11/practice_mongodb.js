import express from 'express';

import { MongoClient } from 'mongodb';

const dbName="test";
const url="mongodb://localhost:27017"
const app=express();

const obj=new MongoClient(url);

app.use(express.json());
app.use(express.urlencoded({extended:true}));
obj.connect().then((connection)=>{

  const db=connection.db(dbName);
  const collectionName=db.collection("test1");
   
  app.get('/api',async function(req,res){
    let users=await collectionName.find().toArray();
    res.send(users);
  });

  app.get('/user/sumit',async function(req,res){
    let filteredData=await collectionName.find({name:"Ishan"}).toArray();
    res.send(filteredData);
  })

  app.get('/formPage',async function(req,res){
    let form=`
    <form method="POST" action="/addUser">
      <label>Name:</label>
      <input type="name" name="name"><br><br>
      <label>Password:</label>
      <input type="password" name="password"><br><br>
      <input type="submit" value="submit">
    </form>`
    res.send(form);
  })
  
  app.post('/addUser',async (req,res)=>{
    const userDataObj=req.body;
    await collectionName.insertOne(userDataObj);
    res.send("Data successfully added");
  })
  })

// async function connectDB(){
//   try{
//     await obj.connect();
 
//     const db=obj.db(dbName);
//     const collectionName=db.collection("test1");
//     let users=await collectionName.find().toArray();
//     console.log(users);
//   }
//   catch(error){
//     console.log("DB error",error);
//   }
//   finally{
//     obj.close();
//   }
// };

//connectDB();


app.get('/',(req,res)=>{
  res.send("<h1>This is home page</h1>");
});




app.listen(3004,()=>{
  console.log("server is running mongodb");
})