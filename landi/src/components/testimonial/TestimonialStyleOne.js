import React from 'react';
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';
import TestimonialStyleOneImg1 from '../../assets/images/testimonial/1.jpg';
import TestimonialStyleOneImg2 from '../../assets/images/testimonial/2.jpg';
import TestimonialStyleOneImg3 from '../../assets/images/testimonial/3.jpg';
import TestimonialStyleOneImg4 from '../../assets/images/testimonial/4.jpg';
import TestimonialStyleOneImg5 from '../../assets/images/testimonial/5.jpg';
import TestimonialStyleOneImg6 from '../../assets/images/testimonial/6.jpg';
import TestimonialStyleOneImg7 from '../../assets/images/testimonial/7.jpg';

const TestimonialStyleOneData = [
    
    {
        id: uuidv4(),
        img: TestimonialStyleOneImg1,
        name: 'Nicolas Murka',
        position: 'CEO, Jupiter',
        description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut sed quia consequuntur dolores ratione voluptatem',
    },
    
    {
        id: uuidv4(),
        img: TestimonialStyleOneImg2,
        name: 'Nicolas Murka',
        position: 'CEO, Jupiter',
        description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut sed quia consequuntur dolores ratione voluptatem',
    },
    
    {
        id: uuidv4(),
        img: TestimonialStyleOneImg3,
        name: 'Nicolas Murka',
        position: 'CEO, Jupiter',
        description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut sed quia consequuntur dolores ratione voluptatem',
    },
    
    {
        id: uuidv4(),
        img: TestimonialStyleOneImg4,
        name: 'Nicolas Murka',
        position: 'CEO, Jupiter',
        description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut sed quia consequuntur dolores ratione voluptatem',
    },
    
    {
        id: uuidv4(),
        img: TestimonialStyleOneImg5,
        name: 'Nicolas Murka',
        position: 'CEO, Jupiter',
        description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut sed quia consequuntur dolores ratione voluptatem',
    },
    
    {
        id: uuidv4(),
        img: TestimonialStyleOneImg6,
        name: 'Nicolas Murka',
        position: 'CEO, Jupiter',
        description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut sed quia consequuntur dolores ratione voluptatem',
    },
    
    {
        id: uuidv4(),
        img: TestimonialStyleOneImg7,
        name: 'Nicolas Murka',
        position: 'CEO, Jupiter',
        description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut sed quia consequuntur dolores ratione voluptatem',
    },

];

const TestimonialStyleOneItem = ({ img, name, position, description }) => {
    return (
        <>
            <div className="single-testimonial">
                <img src={img} alt="" />
                <h3>{name}</h3>
                <span>{position}</span>
                <p>{description}</p>
                <div className="star-rating">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
            </div>
        </>
    )
}

const TestimonialStyleOne = () => {
    const TestimonialStyleOne1 = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className="testimonial-area theme-bg-4 pt-280 pb-110">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="section-title text-center mb-70">
                                <span>Happy Customers</span>
                                <h2>What Our Customer Says <br /> About Our Services</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <Slider {...TestimonialStyleOne1} className="testimonial-style-1">
                            {TestimonialStyleOneData.map((data) => (
                                <TestimonialStyleOneItem
                                    key={data.id}
                                    img={data.img}
                                    name={data.name}
                                    position={data.position}
                                    description={data.description}
                                />
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestimonialStyleOne;