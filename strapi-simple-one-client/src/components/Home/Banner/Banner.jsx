import React from "react";
import { useNavigate } from "react-router-dom";

import "./Banner.scss";
import BannerImg from "../../../assets/banner-img1.png";

const Banner = () => {
    const navigate = useNavigate();
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>DISCOVER</h1>
                    <p>
                    Take our quick, personalized quiz to uncover the Ayurvedic products that best suit your needs. Experience tailored recommendations and find natural solutions just for you.
                    </p>
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2" onClick={() => navigate("/test")}>Take Test</div>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} />
            </div>
        </div>
    );
};

export default Banner;
