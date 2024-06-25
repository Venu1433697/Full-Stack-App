const express=require('express');
const app=express();

const userRouter=require('./routers/user');
const adminRouter=require('./routers/admin');


app.use(userRouter);


app.listen(3000,(res,rej)=>{
console.log('3000 port')
})
