import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDoubleRight } from "react-icons/fa";
import ServiceStyleThreeImg1 from '../../assets/images/service/landscape.png';
import ServiceStyleThreeImg2 from '../../assets/images/service/growing.png';
import ServiceStyleThreeImg3 from '../../assets/images/service/harvest.png';

const ServiceStyleThree = () => {
    return (
        <>
            <div className="service-area gray-bg-2 pt-110 pb-110">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="section-title text-center mb-70">
                                <span>Our Services</span>
                                <h2>Why will you choose our <br /> services?</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-70">
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="single-service box-shadow-1 text-center">
                                <div className="service-icon ml-5">
                                    <img src={ServiceStyleThreeImg1} alt="Service Icon"/>
                                </div>
                                <h3>Landscape Design</h3>
                                <p>There are many variations of passages the majority have suffered alteration form.</p>
                                <Link to="/">Read More <span className="service-readmore-icon"><FaAngleDoubleRight /></span></Link>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="single-service box-shadow-1 text-center">
                                <div className="service-icon ml-5">
                                    <img src={ServiceStyleThreeImg2} alt="Service Icon" />
                                </div>
                                <h3>Plant Growing</h3>
                                <p>There are many variations of passages the majority have suffered alteration form.</p>
                                <Link to="/">Read More <span className="service-readmore-icon"><FaAngleDoubleRight /></span></Link>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="single-service box-shadow-1 text-center">
                                <div className="service-icon ml-5">
                                    <img src={ServiceStyleThreeImg3} alt="Service Icon" />
                                </div>
                                <h3>Branch Cutting</h3>
                                <p>There are many variations of passages the majority have suffered alteration form.</p>
                                <Link to="/">Read More <span className="service-readmore-icon"><FaAngleDoubleRight /></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceStyleThree;