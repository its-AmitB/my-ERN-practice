const queryString=require('querystring');
function dataSubmit(req,res){

  let rawD='';
  
req.on('data',chunk=>{
  rawD+=chunk;
})

req.on('end',()=>{
  const parseD=queryString.parse(rawD);
  res.write(`
  <h1> data submitted is ${parseD.username} and Password = ${parseD.password}`);
  res.end();
})
  
}
module.exports=dataSubmit;