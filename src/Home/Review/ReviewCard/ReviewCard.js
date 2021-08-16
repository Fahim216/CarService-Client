import React, { useEffect } from 'react';
import { useState } from "react";


const ReviewCard = () => {
    
    const[review,SetReview]=useState([])
    
    useEffect(()=>{
     fetch(`https://car-service12.herokuapp.com/review`)
     .then(res=>res.json())
     .then(data=>SetReview(data))
    },[])
    return (
       <section className='row mt-5 ms-3 me-3 text-center'>
           <h1 className='text-center text-success'>Review From Our Client</h1>
            {review.map(reviews=>(
                  <div className="col-md-4 text-black service-info">
                      <div className="mt-4 shadow-lg p-3 mb-5 bg-white rounded">
                          <h5>{reviews.opinion}</h5>
                         <p className="text-success">{reviews.name}({reviews.work})</p>
                       <h1 className="fs-1"> *****</h1>
                      </div></div>
            ))}
      
       
        <div>
          
        </div>
       </section>
    );
};

export default ReviewCard;