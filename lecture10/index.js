import express from 'express'

const app=express();

app.get('/',(req,res)=>{
  const users=["Amit","Sumit","Sidhu"];

  let data=``;
  data+="<ul>";
  for(let i=0;i<users.length;i++){
    console.log(users[i]);
    data+=`<li><a href="/user/${users[i]}">${users[i]}</a></li>`;
  }
  data+="</ul>"
  res.send(data);
})

app.get("/user/:name",(req,res)=>{
  console.log("req.params.name");
  res.send(`This is ${req.params.name} profile page`);
})

const PORT=3004;
app.listen(PORT,()=>{
  console.log(`http://localhost:${PORT}`)
});
