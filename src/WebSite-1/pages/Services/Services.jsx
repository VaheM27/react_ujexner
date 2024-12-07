import React from "react";
import Icon1 from '../../assets/icons/icon1.png';
import Icon2 from '../../assets/icons/icon2.png';
import Icon3 from '../../assets/icons/icon3.png';

import './Services.css'

const Services = () => {
    return (
        <div className="Services">
            <div className="titleAndCards">
                <div className="title">
                    <h1>Services</h1>
                    <p>Typesetting industry lorem Ipsum is simply dummy text of the</p>
                </div>
                <div className="cards">
                    <div className="card1 card">
                        <img src={Icon1} alt="" />
                        <h2>Original Coffee</h2>
                        <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea</p>
                        <button>READ MORE</button>
                    </div>
                    <div className="card2 card">
                        <img src={Icon2} alt="" />
                        <h2>20 Coffee Flavors</h2>
                        <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea</p>
                        <button>READ MORE</button>
                    </div>
                    <div className="card3 card">
                        <img src={Icon3} alt="" />
                        <h2>Pleasant Abient</h2>
                        <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea</p>
                        <button>READ MORE</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
