import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import Navbar from "./../../Shared/Navbar/Navbar";
import { useState } from "react";
import ReviewCard from './ReviewCard/ReviewCard';

const Review = () => {
   
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
      
        
        fetch('https://car-service12.herokuapp.com/addReview',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        
        .then(success =>{
            if(success){
                alert('success');
            }
        })
       
   
    }
    return (
       <section className=''>
          
           <div>

               <Navbar></Navbar>
           </div>
         
           <h3 className='mt-5 text-center shadow-lg p-3 mb-2 bg-grey rounded'>Please Give Us Your Review to improve our facility</h3>
          
           <div style={{height: '200px'}} className='ms-5 me-5 d-flex justify-content-center mt-4 shadow-lg p-3 mb-5 bg-success rounded '>
           <form onSubmit={handleSubmit(onSubmit)}>
    
      <input className='mt-2 ' type='text' name='name' placeholder='Your name'{...register("name")} />
     <br />
    
      <input className='mt-2 ' type='text' name='work' placeholder='Your Profession'{...register("work")} />
     <br /> <input style={{height: '100px'}}  className='mt-2 ' type='text' name='opinion' placeholder='Your opinion'{...register("opinion")} />
      {errors.exampleRequired && <span>This field is required</span>}
      <br />
      
      <input className='mt-2 btn btn-primary ' type="submit" value="submit" />
    </form>
           </div>
           
     
         
       </section>
    );
};

export default Review;