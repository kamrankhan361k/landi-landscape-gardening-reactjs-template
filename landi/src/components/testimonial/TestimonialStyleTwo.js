import React from 'react';
import { FaQuoteLeft } from "react-icons/fa";
import Slider from "react-slick";
import TestimonialStyleTwoImg1 from '../../assets/images/testimonial/testimonial-1.png';

const TestimonialStyleTwo = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        cssEase: 'linear',
    };
    return (
        <>
            <div className="testimonial-area white-bg pt-110 pb-110">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="section-title text-center mb-70">
                                <span>Happy Customer</span>
                                <h2>What Our Customer Says <br /> About Our Services</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex align-items-end">
                        <div className="col-xl-6 col-lg-6">
                            <div className="testimonial-img">
                                <img src={TestimonialStyleTwoImg1} alt="" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div  className="testimonial-style-2-wrapper">
                                <Slider {...settings} className="testimonial-style-2">
                                    <div className="single-testimonial-style-2">
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered humour, or randomised words which don't look even slightly believable. If you are going to use a passage need of the sure.</p>
                                        <h4>Aynal hoque</h4>
                                        <span>CEO, Black Forest</span>
                                    </div>
                                    <div className="single-testimonial-style-2">
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered humour, or randomised words which don't look even slightly believable. If you are going to use a passage need of the sure.</p>
                                        <h4>Mokadesh Chowdhury</h4>
                                        <span>CEO, Najowa Garden</span>
                                    </div>
                                    <div className="single-testimonial-style-2">
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered humour, or randomised words which don't look even slightly believable. If you are going to use a passage need of the sure.</p>
                                        <h4>Raihan Khan</h4>
                                        <span>CEO, Fast Garden</span>
                                    </div>
                                </Slider>
                                <div className="testimonial-quote-icon">
                                    <FaQuoteLeft />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestimonialStyleTwo;