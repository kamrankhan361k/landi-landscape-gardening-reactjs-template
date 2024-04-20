import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';
import Slider from "react-slick";
import TestimonialStyleThreeImg1 from "../../assets/images/testimonial/testimonial-2.png";
import TestimonialStyleThreeImg2 from "../../assets/images/testimonial/5.jpg";
import TestimonialStyleThreeImg3 from "../../assets/images/testimonial/2.jpg";
import TestimonialStyleThreeImg4 from "../../assets/images/testimonial/4.jpg";

const TestimonialThreeCommentData = [
    
    {
        id: uuidv4(),
        comment: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through will.",
    },
    
    {
        id: uuidv4(),
        comment: "We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue and equal blame belongs to those who fail in their duty through will.",
    },
    
    {
        id: uuidv4(),
        comment: "Denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue and equal blame belongs to those who fail in their duty through will.",
    },

];

const TestimonialThreeAuthorData = [
    
    {
        id: uuidv4(),
        img: TestimonialStyleThreeImg2,
        name: 'John Deo',
        position: 'Enterpreneur',
    },
    
    {
        id: uuidv4(),
        img: TestimonialStyleThreeImg3,
        name: 'Adam Smith',
        position: 'Enterpreneur',
    },
    
    {
        id: uuidv4(),
        img: TestimonialStyleThreeImg4,
        name: 'Sofia Smith',
        position: 'Enterpreneur',
    },

];

const TestimonialThreeCommentItem = ({ comment }) => {
    return (
        <>
            <div className="single-testimonial-style-3">
                <p>{comment}</p>
            </div>
        </>
    )
}

const TestimonialThreeAuthorItem = ({ img, name, position }) => {
    return (
        <>
            <div className="single-testimonial-style-3-navigator">
                <img src={img} alt="" />
                <h5>{name}</h5>
                <span>{position}</span>
            </div>
        </>
    )
}

const TestimonialStyleThree = () => {
    
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

    return (
        <>
            <div className="contact-testimonial pt-110 pb-110">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="testimonial-img-1 ml-50">
                                <img src={TestimonialStyleThreeImg1} alt="" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <h2>Satisfied Users Over The Globe</h2>

                            <Slider
                                asNavFor={nav2}
                                ref={(slider1) => setNav1(slider1)}
                                slidesToShow={1} 
                                slidesToScroll={1} 
                                arrows={false} 
                                fade={true} 
                                className="testimonial-style-3">
                                    {TestimonialThreeCommentData.map((data) => (
                                        <TestimonialThreeCommentItem
                                            key={data.id}
                                            comment={data.comment}
                                        />
                                    ))}
                            </Slider>
                            <Slider asNavFor={nav1}
                                ref={(slider2) => setNav2(slider2)}
                                slidesToShow={2}
                                slidesToScroll={1}
                                swipeToSlide={true} 
                                dots={false} 
                                arrows={true} 
                                centerMode={false} 
                                infinite={true} 
                                prevArrow={<button type="button" className="slick-prev"><FaChevronLeft /></button>} 
                                nextArrow={<button type="button" className="slick-next"><FaChevronRight /></button>} 
                                className="testimonial-style-3-navigator mt-40">
                                    {TestimonialThreeAuthorData.map((data) => (
                                        <TestimonialThreeAuthorItem
                                            key={data.id}
                                            img={data.img}
                                            name={data.name}
                                            position={data.position}
                                            fbLink={data.fbLink}
                                            twitterLink={data.twitterLink}
                                            instagramLink={data.instagramLink}
                                            pinterestLink={data.pinterestLink}
                                        />
                                    ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestimonialStyleThree;