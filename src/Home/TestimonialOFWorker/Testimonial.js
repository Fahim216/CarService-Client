import React from 'react';
import cleaner from '../../image/Cleaner-on-hire.jpg';
import breakMechanic from '../../image/break-2.jpg';
import mechanics from '../../image/mechanic2.jpg';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import { useState,useEffect } from "react";



// const worker=[
//     {    photo: mechanics,
//         name:'karim Benzima',
//         degree:'Mechanical Engg.(B.sc)',
//         description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, consequatur. Nihil animi eos voluptates inventore. Nemo rerum consequatur deleniti nesciunt.",

//     },
//     {    photo: breakMechanic,
//         name:'Raihan Torofder',
//         degree:'Mechanical Engg.(B.sc)',
//         description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, consequatur. Nihil animi eos voluptates inventore. Nemo rerum consequatur deleniti nesciunt.",

//     },
//     {   photo: cleaner,
//         name:'Topu Saklain',
//         degree:'Chemical Engg.',
//         description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, consequatur. Nihil animi eos voluptates inventore. Nemo rerum consequatur deleniti nesciunt.",

//     }
// ]

const Testimonial = () => {
    const[worker,setWorker]=useState([])
    useEffect(()=>{
        fetch(`https://car-service12.herokuapp.com/workers`)
        .then(res=>res.json())
        .then(data=>setWorker(data))
       },[])

    
    return (
      <section className='row mt-5 ms-3 me-3 text-center'>
         <h1 className='mt-2 mb-5'>Our Chief Workers</h1>
       
              {
                  worker.map(worker =><TestimonialCard worker={worker}></TestimonialCard>)
              }
         
       
         
            
      </section>
    );
};

export default Testimonial;