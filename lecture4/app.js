const http=require('http');
const queryString=require('querystring');
// const userData=[
//   {id:1,name:'Amit'},
//   {id:2,name:'John'},
//   {id:3,name:'Doe'},
// ];
const server=http.createServer((req,res)=>{
  // console.log(req.url,req.method,req.headers);
  // process.exit();
    // res.setHeader('Content-Type', 'application/json');
    // res.write(JSON.stringify(userData));
    // res.end();

  res.writeHead(200, { 'Content-Type': 'text/html' });
  if(req.url==='/'){
    res.write(`
      <h1>
      <form action="/submit" method="post"> 
        <label for="name">Name</label>
        <input type="text" placeholder="John Doe" name="name"/>
        <input type="password" placeholder="Qwerty@123" name="password"/>
        <button type="submit">Submit</button>
      </h1>
      </form>
    `);
  }
  else if(req.url=='/submit'){
    
    let body='';
    req.on('data',chunk=>{
      body+=chunk;
    });
    
    req.on('end',()=>{
      console.log(body);
      let parseData=queryString.parse(body);
      console.log(`name : ${parseData.name} and password: ${parseData.password}`);
    });
    res.write(`<h1>Form Submitted</h1>`);
  }
  else{
    res.write("<h1>NOTHING HERE</h1>");
  }
  res.end(); 
})  
const PORT=3001;
server.listen(PORT,(err)=>{
  if (err) throw err;
  console.log(`Server runnning at http://localhost:${PORT}`);
})