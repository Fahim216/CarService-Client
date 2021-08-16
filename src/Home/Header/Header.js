import React from 'react';
import Navbar from "./../../Shared/Navbar/Navbar";
import HeaderMain from "./../HeaderMain/HeaderMain";
import Services from "./../Services/Services";
import Review from "./../Review/Review";
import ReviewCard from '../Review/ReviewCard/ReviewCard';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <Services></Services>

        </div>
    );
};

export default Header;