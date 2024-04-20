import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';
import Slider from "react-slick";
import HeroStyleThreeImg1 from '../../assets/images/hero/3.jpg';
import HeroStyleThreeImg2 from '../../assets/images/hero/2.jpg';
import HeroStyleThreeImg3 from '../../assets/images/hero/1.jpg';

const HeroStyleThreeSliderData = [
    
    {
        id: uuidv4(),
        img: HeroStyleThreeImg1,
        heading: 'Wellcome To Our Landscap & Gardening Solutions',
        description: 'Landscape and Garden has been a presence on the international market since 2000 and is part of our strong values for a forward thinking subject company',
        btnLink: '/',
        btnText: 'Our Solution',
    },
    
    {
        id: uuidv4(),
        img: HeroStyleThreeImg2,
        heading: 'Wellcome To Our Landscap & Gardening Solutions',
        description: 'Landscape and Garden has been a presence on the international market since 2000 and is part of our strong values for a forward thinking subject company',
        btnLink: '/',
        btnText: 'Our Solution',
    },
    
    {
        id: uuidv4(),
        img: HeroStyleThreeImg3,
        heading: 'Wellcome To Our Landscap & Gardening Solutions',
        description: 'Landscape and Garden has been a presence on the international market since 2000 and is part of our strong values for a forward thinking subject company',
        btnLink: '/',
        btnText: 'Our Solution',
    },
    
    {
        id: uuidv4(),
        img: HeroStyleThreeImg1,
        heading: 'Wellcome To Our Landscap & Gardening Solutions',
        description: 'Landscape and Garden has been a presence on the international market since 2000 and is part of our strong values for a forward thinking subject company',
        btnLink: '/',
        btnText: 'Our Solution',
    },

];

const HeroStyleThreeSliderItem = ({ img, heading, description, btnLink, btnText }) => {
    return (
        <>
            <div className="single-slider-style-2 height-680 bg-property d-flex align-items-center" data-overlay="black" data-opacity="4" style={{ backgroundImage: `url(${img})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="slide-content-wrapper-2">
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

const HeroStyleThreeSliderBoxData = [
    
    {
        id: uuidv4(),
        heading: 'Step 1',
        description: 'There are many variations of passages of Lorem Ipsum available.',
    },
    
    {
        id: uuidv4(),
        heading: 'Step 2',
        description: 'There are many variations of passages of Lorem Ipsum available.',
    },
    
    {
        id: uuidv4(),
        heading: 'Step 3',
        description: 'There are many variations of passages of Lorem Ipsum available.',
    },
    
    {
        id: uuidv4(),
        heading: 'Step 4',
        description: 'There are many variations of passages of Lorem Ipsum available.',
    },

];

const HeroStyleThreeSliderBoxItem = ({ heading, description }) => {
    return (
        <>
            <div className="single-slider-box pt-40 pb-20 pl-20 pr-20">
                <h3 className="white-color">{heading}</h3>
                <p className="white-color">{description}</p>
            </div>
        </>
    )
}

const HeroStyleThree = () => {

    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

    return (
        <>
            <Slider
                asNavFor={nav2}
                ref={(slider1) => setNav1(slider1)}
                slidesToShow={1} 
                slidesToScroll={1} 
                arrows={false} 
                fade={true} 
                className="hero-slider-2">
                    {HeroStyleThreeSliderData.map((data) => (
                        <HeroStyleThreeSliderItem
                            key={data.id}
                            img={data.img}
                            heading={data.heading}
                            description={data.description}
                            btnLink={data.btnLink}
                            btnText={data.btnText}
                        />
                    ))}
            </Slider>

            <div className="hero-slider-box theme-bg-1">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <Slider asNavFor={nav1}
                                ref={(slider2) => setNav2(slider2)}
                                slidesToShow={3}
                                slidesToScroll={1}
                                dots={false} 
                                arrows={true} 
                                centerMode={false} 
                                infinite={true} 
                                prevArrow={<button type="button" className="slick-prev"><FaChevronLeft /></button>} 
                                nextArrow={<button type="button" className="slick-next"><FaChevronRight /></button>} 
                                responsive={ [{
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
                                            slidesToScroll: 1
                                        }
                                    },
                                    {
                                        breakpoint: 480,
                                        settings: {
                                            slidesToShow: 1,
                                            slidesToScroll: 1
                                        }
                                    }
                                ]}
                                className="slider-box pr-200">
                                    {HeroStyleThreeSliderBoxData.map((data) => (
                                        <HeroStyleThreeSliderBoxItem
                                            key={data.id}
                                            heading={data.heading}
                                            description={data.description}
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

export default HeroStyleThree