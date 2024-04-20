import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import HomeOneServiceImg1 from '../../assets/images/service/2.jpg';


const HomeOneService = () => {
    return (
        <div className="service-features white-bg mt-140 pt-110 pb-105">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <img src={HomeOneServiceImg1} alt="About Us" />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 d-flex align-items-center pl-70">
                        <div className="service-bullet-wrapper">
                            <div className="section-title mr-30 mb-40">
                                <span>Services</span>
                                <h2>Our Best Landscape Specialists</h2>
                            </div>
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="service-bullet-list">
                                        <ul>
                                            <li><FaChevronRight />These cases</li>
                                            <li><FaChevronRight />We denounce</li>
                                            <li><FaChevronRight />Nam libero</li>
                                            <li><FaChevronRight />These cases</li>
                                            <li><FaChevronRight />Pursue pleasure</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="service-bullet-list">
                                        <ul>
                                            <li><FaChevronRight />These cases</li>
                                            <li><FaChevronRight />We denounce</li>
                                            <li><FaChevronRight />Nam libero</li>
                                            <li><FaChevronRight />These cases</li>
                                            <li><FaChevronRight />Pursue pleasure</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeOneService;