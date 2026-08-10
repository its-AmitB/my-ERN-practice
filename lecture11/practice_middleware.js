import express from "express";
import userData from "./users.json" with {type:'json'};
const app=express();

app.get('/',(req,res)=>{
  res.send("<h1>Hello Greattt Amit</h1>");
  res.send(userData);
  res.end();
});


function ipCheck(req,res,next){
  console.log(req.socket.remoteAddress);
  next();
}

app.set("view-engine","ejs");
app.get('/',ipCheck,(req,res)=>{
  res.end(userDisplay);

});



app.get('/user:id',(req,res)=>{
  
  const id=req.params.id;
  let filteredData=userData.filter((user)=>{
    user.id==id;
  })
  res.send( filteredData);
})

app.listen(3005,()=>{
  console.log("Server ids running");
})