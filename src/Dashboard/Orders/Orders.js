import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from "./../Sidebar/Sidebar";

const Orders = () => {
  const [info,setInfo]=useState([])
  const handleSubmit=()=> {
    console.log()
    fetch('http://localhost:5000/orders',{
      method: 'POST',
      headers:{ 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name:info.name,email:info.email,service:info.service})
    })
    
    .then(success => {
      if(success){
        alert('Success');
      }
    })

  }
  const handleBlur=(e)=> {
    const newInfo={...info}
    newInfo[e.target.name]=e.target.value;
    setInfo(newInfo);

  }
 
  
    return (
      <section>
          <div className="row container-fluid">
        <div  className="col-md-2">
            <Sidebar></Sidebar>
        </div>
       <div className=" ms-5 ps-5 border border-black">
       <div className="ms-auto col-md-8 ps-5 mt-5 pt-5">
        <form onSubmit={handleSubmit}>
    
    <input onBlur={handleBlur}  className='mt-2 ' type='text' name='name' placeholder='Your name' />
   <br />
   <input onBlur={handleBlur} className='mt-2 ' type='text' name='service' placeholder='service name'/><br />
  
    <input onBlur={handleBlur} className='mt-2 ' type='email' name='email' placeholder='Your Email' />
   <br />
  
    <br />
    
    <input className='mt-2 btn btn-primary ' type="submit" value="ConfirmOrder" />
  </form>
        </div>
       </div>
          </div>
      </section>
    );
};

export default Orders;