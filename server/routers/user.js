const express=require('express');
const router=express.Router();

const appointment=require('../controller/appointment');

router.post('/submit',appointment.addFormData);
router.get('/data',appointment.getData);
router.delete('/delete/:id',appointment.deleteData);

module.exports=router;