import express from 'express'
import userData from './users.json' with {type:'json'};

const app=express();
app.set("view engine","ejs");
app.get('/',(req,res)=>{
  res.render('usersDisplay',{userData});
})

// app.get('/user/:id',(req,res)=>{
//   const id=req.params.id;

//   let filteredData=userData.filter((user)=>user.id==id);
//   res.send(id);
// })
const PORT=3004;
app.listen(PORT,()=>{
  console.log("server running")
});