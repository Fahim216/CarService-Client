import React from 'react';
import services from '../../image/cleaning.jpg'

const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="ms-4 mt-4 me-4 row d-flex shadow p-3 mb-5 bg-white rounded align-items-center">
            <div className="col-md-4 offset-md-1">
            <h1 style={{color:'#203047'}}>Start Your JourneY <br /> From Our Car Services</h1>
            <p>We give You of full pay-back services all the year.Don't get hesitate to contact when you need Us.We provide you Car services 24 hours Every Day</p>
            <button className="btn-success">Book Order! Click here</button>
            </div>
            <div className="col-md-6 ">
                <img className="img-fluid" src={services} alt="" />
            </div>

        </main>
    );
};

export default HeaderMain;