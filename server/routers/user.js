const express=require('express');
const router=express.Router();

const appointment=require('../controller/appointment')

router.use('/',appointment.user);


router.post('/formData',appointment.addFormData)


module.exports=router;