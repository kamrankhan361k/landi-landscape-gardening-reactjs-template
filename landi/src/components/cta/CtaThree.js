import React from 'react';
import { Link } from 'react-router-dom';
import CtaThreeImg1 from '../../assets/images/icon/cta.png';

const CtaThree = () => {
    return (
        <>
            <div className="cta-style-3">
                <div className="container">
                    <div className="cta-style-3-wrapper white-bg box-shadow-3 pt-60 pb-60 pl-35 pr-35">
                        <div className="row">
                            <div className="col-xl-9 col-lg-8 col-md-7 col-sm-12">
                                <h3>A Complete Solution For Your Gardening & <br /> Landscape Service</h3>
                                <div className="cta-shape">
                                    <img src={CtaThreeImg1} alt="" />
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-5 col-sm-12 text-xl-end text-lg-end text-md-end text-sm-center">
                                <Link to="/" className="l-btn">More Services</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CtaThree;