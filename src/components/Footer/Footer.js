import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <>
            <footer class="text-white bg-dark">
                <div class="container">
                    <br />
                    <div class="row">
                        <div class="col-2">
                            <h5>Contact</h5>
                            <li>
                                <i class="fas fa-envelope-square icon"></i> Email Us
                    </li>
                            <li>
                                <i class="fas fa-phone icon"></i> (866) 467-4263
                    </li>
                            <li>
                                <i class="fas fa-map-marker-alt icon"></i> Find a Store
                    </li>
                        </div>
                        <div class="col-2">
                            <h5>About</h5>
                            <li>
                                Who We Are
                    </li>
                            <li>
                                Frequenly Asked Questions
                    </li>
                            <li>
                                In The News
                    </li>
                        </div>
                        <div class="col-3">
                            <h5>Customer Service</h5>
                            <li>
                                Lifetime Warranty
                    </li>
                            <li>
                                Programs
                    </li>
                            <li>
                                Order Tracking
                    </li>
                        </div>
                        <div class="col-5">
                            <h5>Follow Us</h5>
                            <li>
                                <i class="fab fa-facebook social"></i>
                                <i class="fab fa-twitter-square social"></i>
                                <i class="fab fa-pinterest social"></i>
                                <i class="fab fa-instagram social"></i>
                                <i class="fab fa-youtube-square social"></i>
                            </li>
                            <br />
                            <li>
                                Be the first to know about special offers and more!
                    </li>
                            <li>
                                <form class="d-flex">
                                    <input class="form-control" type="email" placeholder="Email Address" aria-label="email" />
                                    <button class="btn btn-light my-2 my-sm-0" type="submit">Submit</button>
                                </form>
                            </li>
                        </div>
                    </div>
                </div>
                <br />
            </footer>
        </>
            );
        };
        
export default Footer;