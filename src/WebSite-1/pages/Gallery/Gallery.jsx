import React from "react";
import Img1 from '../../assets/images/img-1.png'
import Img2 from '../../assets/images/img-2.png'
import Img3 from '../../assets/images/img-3.png'
import Img4 from '../../assets/images/img-4.png'
import Img5 from '../../assets/images/img-5.png'
import Img6 from '../../assets/images/img-6.png'
import Img7 from '../../assets/images/img-7.png'
import Img8 from '../../assets/images/img-8.png'
import Img9 from '../../assets/images/img-9.png'

import "./Gallery.css"

const Gallery = () => {
    return (
        <div className="Gallery">
            <div className="titleAndImages">
                <div className="title">
                    <h1>Our Gallery</h1>
                    <p>Lorem Ipsum is simply dummy text of printing typesetting ststry lorem Ipsum the industry'ndard dummy text ever since of the 1500s, when an unknown printer took a galley of type and scra make a type specimen book. It has</p>
                </div>
                <div className="imagesBox">
                        <img src={Img1} alt="" />
                        <img src={Img2} alt="" />
                        <img src={Img3} alt="" />
                        <img src={Img4} alt="" />
                        <img src={Img5} alt="" />
                        <img src={Img6} alt="" />
                        <img src={Img7} alt="" />
                        <img src={Img8} alt="" />
                        <img src={Img9} alt="" />
                </div>
                <button>See More</button>
            </div>
        </div>
    );
}

export default Gallery;
