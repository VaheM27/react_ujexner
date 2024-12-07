import React from "react";
import aboutUsImage from '../../assets/images/about-img.png'

import './AboutUs.css'

const AboutUs = () => {
    return (
        <div className="AboutUs">
            <div className="textAndImage">
                <div className="text">
                    <h1>ABOUT US</h1>
                    <span>Full cleaning and housekeeping services for companies and households.</span>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.Lorem Ipsum is simply</p>
                    <button>Read More</button>
                </div>
                <div className="image">
                    <img src={aboutUsImage} alt="" />
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
