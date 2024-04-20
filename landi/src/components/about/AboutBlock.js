import React from 'react';
import {Link} from 'react-router-dom';
import AboutBlockImg1 from '../../assets/images/about/about-large.jpg';
import AboutBlockImg2 from '../../assets/images/about/about-small.jpg';
import AboutBlockImg3 from '../../assets/images/about/about-author-avatar.jpg';

const AboutBlock = () => {
    return (
        <>
            <div className="about-area gray-bg-2 pt-110 pb-110">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-xl-6 col-lg-6 col-md-6 pl-50 pr-50">
                            <div className="about-img-style-2">
                                <img src={AboutBlockImg1} alt="" />
                                <div className="about-small-img">
                                    <img src={AboutBlockImg2} alt="" />
                                </div>
                                <div className="about-experience">
                                    <h2>20+</h2>
                                    <span>Years Of <br /> Experiences</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="about-text-wrapper">
                                <div className="section-title mr-100 mb-40">
                                    <span>About Landi</span>
                                    <h2 className="mb-30">We Have 20 Years of Experience in Garden Landscape Service</h2>
                                    <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. Combined with a handful of model sentence structures,</p>
                                </div>
                                <div className="row">
                                    <div className="col-xl-5 col-lg-12">
                                        <Link to="/" className="l-btn">Read More</Link>
                                    </div>
                                    <div className="col-xl-7 col-lg-12">
                                        <div className="about-author-avatar-wrapper d-flex align-items-center">
                                            <img src={AboutBlockImg3} alt="" />
                                            <div className="about-author-avatar-content">
                                                <h5>Nicolas Jurgan</h5>
                                                <span>Founder Landscape</span>
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

export default AboutBlock;