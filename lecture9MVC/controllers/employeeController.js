import employee from '../models/employeeModel.js';

export default function showEmployee(req,res){
  const employeeId=req.params.id;

  
  res.send('employee.ejs',employeeId);
};