import http from "http" 
// import path from "path"
// import { fileURLToPath } from "url";

// const __filename=fileURLToPath(import.meta.url);
// const __dirname=path.dirname(__filename);
// console.log(__dirname);
const PORT=3001;

function requestServer(req,res){
    if(req.url=='/'){
      console.log(req);
      res.write("<h1>TITLE</h1>")
      res.end("REQUEST completed")
    }
    else{
      res.end('Error 404 ah gya')
    }
};

const server=http.createServer(requestServer);

server.listen(PORT,()=>{
  console.log(`Server at http://localhost:${PORT}`)
});