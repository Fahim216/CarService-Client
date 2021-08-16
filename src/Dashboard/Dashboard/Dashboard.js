import React, { useContext } from 'react';
import { useState ,useEffect} from "react";
import Navbar from "./../../Shared/Navbar/Navbar";
import { UserContext } from "./../../App";




const Dashboard = () => {
    const [order,setOrder]=useState([]);
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    useEffect(()=>{
        fetch(`https://car-service12.herokuapp.com/allOrders`)
        .then(res=>res.json())
        .then(data=>setOrder(data))
    },[])
    return (
       <section className="me-5">
           <Navbar></Navbar>
           
           <div className="row">
               <div className="text-center mt-5  ">
                <h1 className="">Your order List given below</h1>
               </div>
               <table  className='table border border-primary container ms-4'>
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