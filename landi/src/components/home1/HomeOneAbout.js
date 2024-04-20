import React from 'react';
import {Link} from 'react-router-dom';
import HomeOneAboutImg1 from '../../assets/images/about/1.jpg';
import HomeOneAboutImg2 from '../../assets/images/about/2.jpg';

const HomeOneAbout = () => {
    return (
        <div className="about-area white-bg pt-105 pb-105">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="about-text-wrapper mb-30">
                            <div className="section-title mr-30 mb-40">
                                <span>Our Services</span>
                                <h2>We Are Right Landscape And Gardening Experts Since 2000</h2>
                            </div>
                            <Link href="/" className="l-btn">Appointment</Link>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="about-wrapper-style-1 mb-30">
                            <img src={HomeOneAboutImg1} alt="About Us" />
                            <img className="about-secondary" src={HomeOneAboutImg2} alt="About Us" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeOneAbout;