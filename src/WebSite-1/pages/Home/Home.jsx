import React from "react";
import AboutUs from '../AboutUs/AboutUs'
import Gallery from "../Gallery/Gallery";
import Services from "../Services/Services";
import ContactUs from "../ContactUs/ContactUs";

import './Home.css'

const Home = () => {
    return (
        <div className="fullWebSite">
            <div className="Home">
                <div className="HomeText">
                    <h2>Outstanding</h2>
                    <h1>Coffee Shop</h1>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,</p>
                    <button>LEARN MORE</button>
                </div>
            </div>
            <AboutUs />
            <Gallery />
            <Services />
            <ContactUs />
        </div>
    )
}

export default Home