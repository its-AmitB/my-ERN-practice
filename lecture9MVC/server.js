import express from 'express'
import userRoutes from "./routes/userRoutes.js";
const app=express();

app.set('view engine','ejs');

app.use('/',userRoutes);

const PORT=3003;
app.listen(PORT,()=>{
  console.log(`http://localhost:${PORT}`)
});