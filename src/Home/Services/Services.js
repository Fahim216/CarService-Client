import React from 'react';
import Enginee from '../../image/enginee.jpg'
import Clean from '../../image/cleaning.jpg'
import Light from '../../image/light.jpg'
import ServicesInfoCard from './ServicesInfoCard/ServicesInfoCard';
const serviceInfo=[
    {
        id: 1,  
      title: 'Engine Work' ,
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, consequatur. Nihil animi eos voluptates inventore. Nemo rerum consequatur deleniti nesciunt.",
      icon: Enginee,
      price:50
    },
    {   id:2,
        title: 'Car Cleaning' ,
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, consequatur. Nihil animi eos voluptates inventore. Nemo rerum consequatur deleniti nesciunt.",
        icon: Clean,
        price:30
      },
      { id:3,
        title: 'Break Repairing' ,
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, consequatur. Nihil animi eos voluptates inventore. Nemo rerum consequatur deleniti nesciunt.",
        icon: Light,
        price:45
      }
    
]
const Services = () => {
   
    return (
        <section className="row mt-5 ms-3 me-3 text-center">
           
                {serviceInfo.map(service => <ServicesInfoCard service={service}></ServicesInfoCard>
                )}
        
        </section>
    );
};

export default Services;