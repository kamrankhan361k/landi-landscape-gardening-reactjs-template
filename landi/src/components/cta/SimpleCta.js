import React from 'react';
import {Link} from 'react-router-dom';

const SimpleCta = () => {
    return (
        <>
            <div className="simple-cta gray-bg pt-30 pb-30">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-9 col-lg-9 col-md-8">
                            <h3>Need Gardening advice? Ask our experts for free. Glad to help you!</h3>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4">
                            <Link to="/" className="l-btn">Learn More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SimpleCta;