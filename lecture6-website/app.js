import http from 'http';
import fs from 'fs';
const PORT=3002;

http.createServer((req,res)=>{
  
  if(req.url==='/'){
    fs.readFile('./home.html','utf-8',(err,homeData)=>{
      if(err){
        res.writeHead(500,"content-type","text/plain");
        res.end("UNKNOWN ERROR");
        return false;
      }
      res.setHeader('Content-Type','text/html');
      res.end(homeData);
    });
  }
}).listen(PORT,()=>{
  console.log(`Server is running at http://localhost:${PORT}`);
});