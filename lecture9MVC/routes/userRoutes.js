import express from 'express';
import showForm from "../controllers/userController.js";
import showEmployee from "../controllers/employeeController.js";

const router=express.Router();

router.get('/','home');

// router.get('/',(req,res)=>{
//   res.send(`<h1>HOME PAGE</h1>
//     <a href='/form'><h2>MOVE to FORM Page</h2></a>`);
// });

router.get('/form',showForm);

router.get('/employee/:id',showEmployee);

export default router;