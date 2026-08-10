console.log("Hello World");
const fs=require('fs');

fs.readFile('output.txt','utf8',(err,data)=>{
  if(err) console.error(err);
  else {
    console.log('File Contents:');
    console.log(data);
  }
})
console.log('this run before it');