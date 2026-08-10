import express from 'express';
import form from './form.js';
const app = express();

app.use(express.urlencoded({extended:true}));
app.get('/',(req,res)=>{
  res.writeHead(200,{'content-type':'text/html'});
  res.end("<h1>HOME</h1> <a href='/form'>GO TO FORM</a>")
});
app.get('/form',(req,res)=>{
  res.writeHead(200,{'content-type':'text/html'});
  res.end(form())
});

app.post('/submit',(req,res)=>{
  console.log(req.body);
  res.send("<h1>Data submitted</h1> <a href='/'>GO TO HOME</a>");
})
app.listen(3003);