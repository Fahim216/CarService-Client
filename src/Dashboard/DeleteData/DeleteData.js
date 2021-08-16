import React, { useEffect, useState } from 'react';

const DeleteData = () => {
    const handleClick=(id) => {
        fetch(`https://car-service12.herokuapp.com/delete/${id}`,{
            method: 'DELETE',
        })
       .then(res=>res.json())
       .then(result=>{
           console.log(result)
        })

    }
    const [order,setOrder]=useState([])
    useEffect(()=>{
        fetch(`https://car-service12.herokuapp.com/allOrders`)
        .then(res=>res.json())
        .then(data=>setOrder(data))
    },[])
    return (
        <div>
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
                        <td><button onClick={()=>handleClick(orders._id)}>Delete data</button></td>
                    </tr>
                    )
                }
            </tbody>
        </table>


          
             
           
           
           </div>
        </div>
    );
};

export default DeleteData;