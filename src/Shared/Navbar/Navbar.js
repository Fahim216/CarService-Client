import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../image/vehicle.png'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-md me-auto navbar-light ">
           
        <div class="container-fluid ml-auto ">
          
        <div>

                <nav className='fs-3 ms-5 '>
                    <img className="img-fluid" style={{height: '40px'}}src={image} alt="" />
                   
                     <Link className="text-decoration-none text-black" to="/home">Car Service</Link>
                </nav>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
              </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-5 mb-2 mb-lg-0 fs-4 ">
              <li class="nav-item ms-5">
              <Link className='nav-link  ms-5' to="/home">Home</Link>
              </li>
              <li class="nav-item ">
                <a class="nav-link  ms-5  " href="/about">About</a>
              </li>
              <li class="nav-item">
              <Link className='nav-link  ms-5' to="/orders">Orders</Link>
              </li>
              <li class="nav-item">
                <Link className='nav-link  ms-5' to="/dashboard">Dashboard</Link>
              </li>
              <li class="nav-item">
               <Link className="nav-link ms-5 "  to="/login">Login</Link>
              </li>
              
            </ul>
           
          </div>
        </div>
      </nav>
    );
};

export default Navbar;