import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import ReviewCard from '../Review/ReviewCard/ReviewCard';
import Navbar from "./../../Shared/Navbar/Navbar";
import Header from "./../Header/Header";
import Services from "./../Services/Services";
import Testimonial from "./../TestimonialOFWorker/Testimonial";
import Review from "./../Review/Review";

const Home = () => {
    return (
        <div>
         <Header></Header>
     
         <Testimonial></Testimonial>
         <ReviewCard></ReviewCard>
         
         <Footer></Footer>
         
        </div>
    );
};

export default Home;