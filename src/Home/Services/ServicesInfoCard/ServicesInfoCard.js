import React from 'react';
import { useState } from "react";
import { Link } from 'react-router-dom';

const ServicesInfoCard = ({service}) => {
    const [services,setServices]=useState({})
    const handleClick= () => {
        const newService={...services}
        setServices(newService);
    }
    return (
        <div className="col-md-4 text-black service-info  ">
            <div className="mt-4 shadow-lg p-3 mb-5 bg-white rounded">
                <img style={{height:'300px'}} className="img-fluid mt-4" src={service.icon} alt="" />
               <div>
               <h2 className='mt-2 mb-3'>{service.title}</h2>
                <p>{service.description}</p>
                <h3>Price:<b>{service.price}$</b></h3>
               <Link to={`${service.id}`}> <button onClick={handleClick} className='mt-2 btn btn-primary'>Book Now</button></Link>
               </div>
                
            </div>
        </div>
    );
};

export default ServicesInfoCard;