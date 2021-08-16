import React, { useEffect } from 'react';
import { useState } from "react";


const ReviewCard = () => {
    
    const[review,SetReview]=useState([])
    
    useEffect(()=>{
     fetch(`http://localhost:5000/review`)
     .then(res=>res.json())
     .then(data=>SetReview(data))
    },[])
    return (
       <section className='row mt-5 ms-3 me-3 text-center'>
           <h1 className='text-center text-success'>Review From Our Client</h1>
            {review.map(reviews=>(
                  <div className="col-md-4 text-black service-info">
                      <div className="mt-4 shadow-lg p-3 mb-5 bg-white rounded">
                          <h1>{reviews.name}</h1>
                          <h5>{reviews.work}</h5>
                          <p className="text-success">{reviews.opinion}</p>
                      </div></div>
            ))}
      
       
        <div>
          
        </div>
       </section>
    );
};

export default ReviewCard;