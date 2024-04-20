import React from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';
import Slider from "react-slick";
import HeroStyleTwoImg1 from '../../assets/images/hero/1.jpg';
import HeroStyleTwoImg2 from '../../assets/images/hero/2.jpg';

const HeroStyleTwoData = [
    
    {
        id: uuidv4(),
        img: HeroStyleTwoImg1,
        heading: 'Wellcome To Our Landscap & Gardening Solutions',
        description: 'Landscape and Garden has been a presence on the international market since 2000 and is part of our strong values for a forward thinking subject company',
        btnLink: '/',
        btnText: 'Our Solution',
    },
    
    {
        id: uuidv4(),
        img: HeroStyleTwoImg2,
        heading: 'Wellcome To Our Landscap & Gardening Solutions',
        description: 'Landscape and Garden has been a presence on the international market since 2000 and is part of our strong values for a forward thinking subject company',
        btnLink: '/',
        btnText: 'Our Solution',
    },

];

const HeroStyleTwoItem = ({ img, heading, description, btnLink, btnText }) => {
    return (
        <>
            <div className="single-slider-style-1 height-800 bg-property d-flex align-items-center" style={{ backgroundImage: `url(${img})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 offset-xl-1 offset-lg-1 offset-md-1">
                            <div className="slide-content-wrapper-1">
                                <h1>{heading}</h1>
                                <p>{description}</p>
                                <a href={btnLink} className="l-btn">{btnText}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const HeroStyleTwo = () => {
    const settings = {
        autoplay: false,
        autoplaySpeed: 10000,
        dots: true,
        fade: true,
        arrows: true,
        prevArrow: <button type="button" className="slick-prev"><FaAngleLeft /></button>,
        nextArrow: <button type="button" className="slick-next"><FaAngleRight /></button>,
        responsive: [
            { breakpoint: 767, settings: { dots: false, arrows: false } }
        ],
    };
    return (
        <>
                <div className="hero-slider-1">
            <Slider {...settings}>
                    {HeroStyleTwoData.map((data) => (
                        <HeroStyleTwoItem
                            key={data.id}
                            img={data.img}
                            heading={data.heading}
                            description={data.description}
                            btnLink={data.btnLink}
                            btnText={data.btnText}
                        />
                    ))}
            </Slider>
                </div>
        </>
    )
}

export default HeroStyleTwo;