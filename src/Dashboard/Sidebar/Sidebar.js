import React from 'react';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers } from '@fortawesome/free-solid-svg-icons';
import {  faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
        <ul className="list-unstyled">
            <li>
                <Link to="/orders" className="text-white">
                    <FontAwesomeIcon icon={faGripHorizontal} /> <span>Book Now</span> 
                </Link>
            </li>
            <li>
                <Link to="/dashboard" className="text-white">
                    <FontAwesomeIcon icon={faCalendar} /> <span>Dashboard</span> 
                </Link>
            </li>
          <div>
            <li>
                <Link to="/Review" className="text-white">
                    <FontAwesomeIcon icon={faUsers} /> <span>Give Review</span>
                </Link>
            </li>
            <li>
                <Link to="/dashboard" className="text-white">
                    <FontAwesomeIcon icon={faFileAlt} /> <span>Dashboard</span>
                </Link>
            </li>
            <li>
                <Link to="/addWorker" className="text-white">
                    <FontAwesomeIcon icon={faFileAlt} /> <span>AddWorker</span>
                </Link>
            </li>
            </div>
            <li>
                <Link to="/doctor/setting" className="text-white" >
                  <FontAwesomeIcon icon={faCog} /> <span>Setting</span>
                </Link>
            </li>
        </ul>
        <div>
            <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
        </div>
    </div>
    );
};

export default Sidebar;