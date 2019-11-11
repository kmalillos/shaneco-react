import React from "react";
import img1 from "./imgs/hero1.jpg";
import img2 from "./imgs/hero2.jpg";
import img3 from "./imgs/hero3.jpg";
import "./Carousel.css";

const Carousel = () => {
    return (
        <>
            <div id="myCarousel" className="carousel slide pointer-event" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className=""></li>
                    <li data-target="#myCarousel" data-slide-to="1" className=""></li>
                    <li data-target="#myCarousel" data-slide-to="2" className="active"></li>
                </ol>

                <div className="carousel-inner d-flex">
                    <div className="carousel-item">
                        <img src={img1} className="img-fluid" alt="Diamond Ring" />
                        <div className="container">
                            <div className="carousel-caption">
                                <h1>Unwrap the Magic</h1>
                                <button className="btn btn-light">Shop the Gift Guide</button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="img-fluid" alt="Engagement Ring" />
                        <div className="container">
                            <div className="carousel-caption text-left">
                                <h1 className="font-weight-bold">The Perfect Proposal</h1>
                                <p>Make it a holiday to remember.</p>
                                <button className="btn btn-light">Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <img src={img3} className="img-fluid" alt="Emerald Ring" />
                        <div className="container">
                            <div className="carousel-caption text-right">
                                <h1 className="font-weight-bold">Tom's Favorites</h1>
                                <p>Tom Shane's favorite pieces this holiday.</p>
                                <button className="btn btn-light">Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </>
    );
};

export default Carousel;