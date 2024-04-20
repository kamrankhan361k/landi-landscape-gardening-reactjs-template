import React from 'react';
import {Link} from 'react-router-dom';
import { FaLongArrowAltRight, FaCheck } from "react-icons/fa";

const PricingOne = () => {
    return (
        <>
            <div className="pricing-area bg-white pt-110 pb-110">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="section-title mb-55 pr-100">
                                <span>Our Pricing</span>
                                <h2>Affordable Pricing Plans</h2>
                                <p className="pt-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <div className="single-pricing-box mb-30">
                                <div className="row">
                                    <div className="col-xl-5 pr-0">
                                        <div className="theme-bg-1 box-shadow-1 pt-60 pb-60 pr-0 text-center">
                                            <h3>$85</h3>
                                            <h4>Essentials Plan</h4>
                                            <Link to="/">Get Started <FaLongArrowAltRight /></Link>
                                        </div>
                                    </div>
                                    <div className="col-xl-7 pl-0 pr-120">
                                        <div className="bg-white box-shadow-1 pt-30 pb-30 pl-35 pr-35">
                                            <ul>
                                                <li><FaCheck />Garden Arrangement</li>
                                                <li><FaCheck />Maintenance Service</li>
                                                <li><FaCheck />Professional Staff</li>
                                                <li><FaCheck />30 Day Warranty</li>
                                                <li><FaCheck />24/7 Support</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="single-pricing-box mb-30">
                                        <div className="row">
                                            <div className="col-xl-5 pr-0">
                                                <div className="theme-bg-1 box-shadow-1 pt-60 pb-60 pr-0 text-center">
                                                    <h3>$85</h3>
                                                    <h4>Essentials Plan</h4>
                                                    <Link to="/">Get Started <FaLongArrowAltRight /></Link>
                                                </div>
                                            </div>
                                            <div className="col-xl-7 pl-0 pr-120">
                                                <div className="bg-white box-shadow-1 pt-30 pb-30 pl-35 pr-35">
                                                    <ul>
                                                        <li><FaCheck />Garden Arrangement</li>
                                                        <li><FaCheck />Maintenance Service</li>
                                                        <li><FaCheck />Professional Staff</li>
                                                        <li><FaCheck />30 Day Warranty</li>
                                                        <li><FaCheck />24/7 Support</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <div className="single-pricing-box">
                                        <div className="row">
                                            <div className="col-xl-5 pr-0">
                                                <div className="theme-bg-1 box-shadow-1 pt-60 pb-60 pr-0 text-center">
                                                    <h3>$85</h3>
                                                    <h4>Essentials Plan</h4>
                                                    <Link to="/">Get Started <FaLongArrowAltRight /></Link>
                                                </div>
                                            </div>
                                            <div className="col-xl-7 pl-0 pr-120">
                                                <div className="bg-white box-shadow-1 pt-30 pb-30 pl-35 pr-35">
                                                    <ul>
                                                        <li><FaCheck />Garden Arrangement</li>
                                                        <li><FaCheck />Maintenance Service</li>
                                                        <li><FaCheck />Professional Staff</li>
                                                        <li><FaCheck />30 Day Warranty</li>
                                                        <li><FaCheck />24/7 Support</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PricingOne;