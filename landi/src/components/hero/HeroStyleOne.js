import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import { FaPlay } from "react-icons/fa";
import HeroStyleOneImg1 from '../../assets/images/hero.jpg';
import HeroStyleOneImg2 from '../../assets/images/hero/1.png';

const HeroStyleOne = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId="0O2aH4XLbto"
                onClose={() => setOpen(false)}
            />
            <div className="hero-area height-800 bg-property d-flex align-items-center" data-overlay="black" data-opacity="7" style={{ backgroundImage: `url(${HeroStyleOneImg1})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="hero-wrapper">
                                <h1>Welcome to Our Perfect Solution Landscape.</h1>
                                <p>We are certified company. We provide best Landscaping services for you your company .</p>
                                <Link to="/" className="l-btn">Our Solution</Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div className="hero-popup-content">
                                <img src={HeroStyleOneImg2} alt="" />
                                <div className="hero-popup-video">
                                    <button 
                                        className="popup-video pulse-effect"
                                        onClick={() => setOpen(true)}>
                                            <FaPlay />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroStyleOne;