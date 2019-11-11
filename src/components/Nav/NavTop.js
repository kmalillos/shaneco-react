import React from "react";


const NavTop = () => {
    return (
        <>
            <div class="container-fluid">
                <div class="d-flex justify-content-around">
                    <div class="align-self-center">
                        <i class="fas fa-phone icon"></i>
                        <i class="fas fa-map-marker-alt icon"></i>
                        <i class="fas fa-question-circle icon"></i>
                    </div>
                    <div class="align-self-center icon">
                        <img src=".\imgs\ShaneCo.png" alt="Shane Company Logo" />
                    </div>
                    <div class="align-self-center">
                        <i class="fas fa-search icon"></i>
                        <i class="far fa-user icon"></i>
                        <i class="fas fa-shopping-cart icon"></i>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavTop;