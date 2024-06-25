function formSubmit(event){
    event.preventDefault();
    const formData={
    useId:event.target.userId.value,
    phone:event.target.phone.value,
    email:event.target.email.value,
    }
    axios
    .post('http://localhost:3000/user/formData',formData)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))

}
