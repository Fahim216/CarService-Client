import React, { useState } from "react";
import Sidebar from "./../Sidebar/Sidebar";

const AddWorker = () => {
    const[info,setInfo]=useState({});
    const [file,setFile]=useState({});

    const handleBlur = (e) =>{
      const newInfo={...info};
      newInfo[e.target.name]=e.target.value;
      setInfo(newInfo);
  }
  const handleFileChange=(e)=>{
      const newFile=e.target.files[0];
      setFile(newFile);
  }
  const handleSubmit=()=>{ 
   
    const formData = new FormData()
    formData.append('file', file);
    formData.append('name', info.name);
    formData.append('email', info.email);
    formData.append('description', info.description);
  
    fetch('https://car-service12.herokuapp.com/addWorker', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.error(error)
    })
  }
 
    
  
    return (
      <section className='row'>
        <div className=' col-md-2 col-sm-2 col-xs-2'><Sidebar></Sidebar> 
        </div>
      <div className=' container ms-5'>
    <div className=' container ms-4'>
      <div className=' container ms-5'>
      <div className='col-md-6 col-sm-10 ms-auto mt-5 shadow-lg p-3 mb-5 bg-grey rounded'>
            <h2>Add worker</h2>
           
         
             <form  onSubmit={handleSubmit}>
     
      <input className='' onBlur={handleBlur}  type='text' name='name' placeholder='Name'/>
      <br />
      <input onBlur={handleBlur}  type='text' name='description' placeholder='description'/>
     <br />
      <input onBlur={handleBlur}  type='email' name='email' placeholder='Your Email' />
      
    
     <br />
      <br /><input onChange={handleFileChange} type='file' name='file' placeholder='upload your image'  />
     
   
   
    
      
     <br /> <input type="submit" />
    </form>
      </div>
      </div>
    </div>
        </div>
        </section>
    );
};

export default AddWorker;