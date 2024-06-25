async function  formSubmit(event){
    event.preventDefault();
    const formData= {
    userId:event.target.userId.value,
    phone:event.target.phone.value,
    email:event.target.email.value,
    }
    try {
        const response = await axios.post('http://localhost:3000/submit', formData);
        console.log('Form submitted successfully');
        event.target.reset();
        alert('Form submitted successfully');
    } catch (error) {
        console.error('Error submitting form:', error);
        alert('Error submitting form');
    }
}

window.addEventListener('load',async (eveny)=>{
  const data= await axios.get('http://localhost:3000/data');
  let a=document.getElementById('appointmentdata');
  for(let i=0;i<data.data.length;i++){
  let tempElemnet=document.createElement('d');
  tempElemnet.innerHTML=`<li id=${data.data[i].id}>${data.data[i].userName} ${data.data[i].phone} ${data.data[i].email} <button onClick="deleteFunction(event)">delete</button> <button>edit</button></li>`;
  a.appendChild(tempElemnet);
  console.log(data.data[i].id)
  }
}) 

async function deleteFunction(event){
    const parentElement=event.target.parentElement;
    const id=parentElement.id;
    const deleteData= await axios.delete(`http://localhost:3000/delete/${id}`);
    console.log(id)
    event.target.parentElement.remove();
}
