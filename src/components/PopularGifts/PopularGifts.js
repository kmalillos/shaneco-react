import React from "react";
import img1 from "./imgs/gift1.jpg";
import img2 from "./imgs/gift2.jpg";
import img3 from "./imgs/gift3.jpg";
import img4 from "./imgs/gift4.jpg";
import "./PopularGifts.css";

const PopularGifts = () => {
    return (
        <>
            <div className="section">
                <h2 className="text-center">Popular Gift Ideas</h2>
                <div className="d-flex justify-content-center">
                    <div className="text-center">
                        <img className="gift-imgs" src={img1} alt="Diamond Gifts" />
                        <h4>Diamonds</h4>
                        <p>Sparkling stones make the perfect gift.</p>
                        <button className="btn btn-light">Shop Now</button>
                    </div>
                    <div className="text-center">
                        <img className="gift-imgs" src={img2} alt="Sapphire Gifts" />
                        <h4>Sapphire</h4>
                        <p>Hand-picked sapphires in a multitude of shades.</p>
                        <button className="btn btn-light">Shop Now</button>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="text-center">
                        <img className="gift-imgs" src={img3} alt="Pearl Gifts" />
                        <h4>Pearl</h4>
                        <p>Timeless classics she'll treasure forever.</p>
                        <button className="btn btn-light">Shop Now</button>
                    </div>
                    <div className="text-center">
                        <img className="gift-imgs" src={img4} alt="Gemstone Gifts" />
                        <h4>Gemstones</h4>
                        <p>Vibrant, colorful jewelry for every person.</p>
                        <button className="btn btn-light">Shop Now</button>
                    </div>

                </div>
            </div>
        </>
    );
};

export default PopularGifts;