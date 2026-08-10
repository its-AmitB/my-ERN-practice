// import {add,sub} from './mathUtil.js';
// // console.log(add(2,3));
// // console.log(sub(2,3));
const http=require('http');
const fs=require('fs');
const userForm=require('./login.js'); 
const dataSubmit=require('./userSubmit.js')
const server=http.createServer((req,res)=>{
    
  res.writeHead(200,{'Content-Type':'text/html'});
  if(req.url==='/login' || req.url=='/'){
      userForm(req,res);
      res.end(); 
    }
    else if(req.url==='/'){
    res.end("Welcome to Home Page");
  }
else if (req.url === '/submit' && req.method === 'POST') {
    dataSubmit(req,res);
  }
  else{
    res.end("<h1>NOTHING HERE</h1>")
  }
  
  //console.log(req.url, req.method );
});
server.listen(3000,()=>{
  console.log('Server running at http://localhost:3000');
});