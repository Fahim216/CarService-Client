import React, { useState } from 'react';
import Sidebar from "./../Sidebar/Sidebar";
import { useContext } from "react";
import { UserContext } from "./../../App";


const Orders = () => {
  const [loggedInUser,setLoggedInUser]=useContext(UserContext);
  const [info,setInfo]=useState([])
  const handleSubmit=()=> {
    console.log()
    fetch('http://localhost:5000/orders',{
      method: 'POST',
      headers:{ 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name:info.name,email:info.email,service:info.service,signIn:loggedInUser.email})
    })
    
    .then(success => {
      if(success){
        alert('Your order has been successfully placed')
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
          <div className="row ">
        <div  className="col-md-2">
            <Sidebar></Sidebar>
        </div>
       <div className=" col-md-4  ms-5 ps-5 ">
       <div className="ms-5 ps-5  mt-5 pt-5">
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