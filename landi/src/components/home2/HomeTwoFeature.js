import React from 'react';
import HomeTwoFeature1 from '../../assets/images/icon/satisfaction-guarantee.png';
import HomeTwoFeature2 from '../../assets/images/icon/professional-team.png';
import HomeTwoFeature3 from '../../assets/images/icon/material-instrument.png';
import HomeTwoFeature4 from '../../assets/images/icon/experience.png';

const HomeTwoFeature = () => {
    return (
        <>
            <div className="features-area bg-white pt-110 pb-110">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <div className="single-feature text-center box-shadow-3">
                                <div className="single-feature-icon">
                                    <img src={HomeTwoFeature1} alt="" />
                                </div>
                                <h5>Satisfaction Guarantee</h5>
                                <p>There are many variations of passages majority have suffered alteration in some form, by</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <div className="single-feature text-center box-shadow-3">
                                <div className="single-feature-icon">
                                    <img src={HomeTwoFeature2} alt="" />
                                </div>
                                <h5>Professional Team</h5>
                                <p>There are many variations of passages majority have suffered alteration in some form, by</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <div className="single-feature text-center box-shadow-3">
                                <div className="single-feature-icon">
                                    <img src={HomeTwoFeature3} alt="" />
                                </div>
                                <h5>Material Instrument</h5>
                                <p>There are many variations of passages majority have suffered alteration in some form, by</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <div className="single-feature text-center box-shadow-3">
                                <div className="single-feature-icon">
                                    <img src={HomeTwoFeature4} alt="" />
                                </div>
                                <h5>20 Years Experience</h5>
                                <p>There are many variations of passages majority have suffered alteration in some form, by</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeTwoFeature;