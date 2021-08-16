
import React from 'react';
import './Fotter.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const noNamed = [
        {name: "Emergency Service" , link: "/orders"},
        {name: "Review" , link: "/review"},
        {name: "OrderList" , link: "/personal-treatment"},
        {name: "Workers" , link: "/tooth-extract"},
       
    ]
    const ourAddress = [
        {name: "New York - 101010 Hudson" , link: "//google.com/map"},
        {name: "Yards" , link: "//google.com/map"},
       
    ]
    const oralHealth = [
        {name: "Engine Work" , link: "/emergency"},
        {name: "One dimensional" , link: "/checkup"},
        {name: "Treatment of Personal instrument" , link: "/personal-treatment"},
        {name: "Free services for 2nd time" , link: "/tooth-extract"},
        {name: "break repair" , link: "/checkup"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Cleaning" , link: "/checkup"}
    ]
    const services = [
        {name: "Enginee work" , link: "/emergency"},
        {name: "Break repairing" , link: "/checkup"},
        {name: "Treatment of Personal Car" , link: "/personal-treatment"},
        {name: "Clean up Car" , link: "/tooth-extract"},
        {name: "Finding Errors" , link: "/checkup"},
        {name: "Wire Up" , link: "/checkup"},
        {name: "Check Up" , link: "/checkup"}
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"Look At Below"} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="We Provide" menuItems={oralHealth}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-primary">+2025550295</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;