import React from 'react';

const TestimonialCard = ({worker}) => {
    return (
        <div className="col-md-4 text-black service-info  ">
        <div className="mt-4 shadow-lg p-3 mb-5 bg-white rounded">
            <img style={{height:'300px'}} className="img-fluid mt-4" src={`data:image/png;base64, ${worker.image.img}`}   alt="" />
           <div>
           <h2 className='mt-2 mb-3'>{worker.name}</h2>
            <p><b>{worker.description}</b></p>
           </div>
            
        </div>
    </div>

            

            
       
    );
};

export default TestimonialCard;