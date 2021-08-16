import React from 'react';
import { useState ,useEffect} from "react";
import Navbar from "./../../Shared/Navbar/Navbar";




const Dashboard = () => {
    const [order,setOrder]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/allOrders`)
        .then(res=>res.json())
        .then(data=>setOrder(data))
    },[])
    return (
       <section>
           <Navbar></Navbar>
           
           <div className="row">
               <div className="text-center mt-5  ">
                <h1>Your order List given below</h1>
               </div>
               <table  className='table table-border-primary ms-3 me-3'>
            <thead>
                <tr>
                    <th className="text-secondary" scope='col'>Name</th>
                    <th className="text-secondary" scope='col'>service</th>
                    <th className="text-secondary" scope='col'>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    order.map((orders,index)=>
                    <tr>
                        <td>{orders.name}</td>
                        <td>{orders.service}</td>
                        <td>{orders.email}</td>
                    </tr>
                    )
                }
            </tbody>
        </table>


          
             
           
           
           </div>
       </section>
    );
};

export default Dashboard;