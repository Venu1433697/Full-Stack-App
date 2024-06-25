const appointment=require('../util/tables/appointmentTable')

exports.addFormData=async (req,res,next)=>{
    const {userId,phone,email}= await req.body;
    console.log(email)
    console.log(userId)
    console.log(phone)
    
    try{
       await appointment.create({
            userName:userId,
            phone:phone,
            email:email
        })
        res.status(200).json({ message: 'Form data received successfully' });
    }
    catch{
        console.error('Error saving form data:', err);
        res.status(500).json({ error: 'Error saving form data' });
    }
   
}

exports.getData=async (req,res,next)=>{
    appointment.findAll()
    .then(product=>{
        res.send(product)
    })
    .catch(err=>{
        console.log(err)
    })
}

exports.deleteData=async (req,res,next)=>{
   let id=req.params.id;

    try{
        let d=await appointment.destroy({where:{id:id}});
        
    }
    catch(err){
        console.log(err)
    }

}