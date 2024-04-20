import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import { FaPlay } from 'react-icons/fa';
import AboutBlockImg1 from '../../assets/images/hero/1.png';

const AboutVideoBlock = () => {
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
            <div className="about-block pt-110 pb-110">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <h2>Why will you choose our <br /> Garden and Landscape <br /> services</h2>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                <br /> <br /> The cites of the word in classical literature, discovered the undoubtable source. the Lorem Ipsum comes from sections.</p>
                            <Link to="/" className="l-btn mt-20">appointment</Link>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="hero-popup-content">
                                <img src={AboutBlockImg1} alt="" />
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

export default AboutVideoBlock;