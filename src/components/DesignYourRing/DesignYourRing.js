import React from "react";
import img1 from "./imgs/design1.jpg";
import img2 from "./imgs/design2.jpg";
import "./DesignYourRing.css";

const DesignYourRing = () => {
    return(
        <>
    <div className="section">
        <div className="d-flex">
            <img className="p-2" src={img1} alt="wedding rings"/>
            <div className="p-2 align-self-center">
                <h3 className="text-center">Design Your Dream Ring</h3>
                <img src={img2} alt="steps on designing your dream ring"/>
            </div>
        </div>
    </div>
        </>
    );
};

export default DesignYourRing;