import React from 'react';
import { Link } from 'react-router-dom';

const CtaOne = () => {
    return (
        <>
            <div className="cta-area theme-bg-1 pt-60 pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="cta-style-1-wrapper text-center">
                                <span>The Company</span>
                                <h2>We invested our hard work for people just like you that <br /> insist on a great user experience.</h2>
                                <p>Schedule a free case evalution .or call us at +123 565 788</p>
                                <Link to="/" className="l-btn">More Project</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CtaOne;