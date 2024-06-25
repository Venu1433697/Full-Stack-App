const express=require('express');
const app=express();

//pakeges
const Sequelize=require('./util/tables/appointmentTable');
const cors=require('cors');
const bodyparsel=require('body-parser');


app.use(cors())
app.use(bodyparsel.json())

//Routers
const userRouter=require('./routers/user');
const adminRouter=require('./routers/admin');

app.use(userRouter);
// app.use(adminRouter);


//database conection 
Sequelize.sync()
.then(res=>console.log(res))
.catch(err=>console.log(err))




app.listen(3000,(res,rej)=>{
console.log('3000 port')
})
