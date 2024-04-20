import React from 'react';
import {Link} from 'react-router-dom';

const LatestPostWidget = () => {
    return (
        <>
            <div className="widget latest-post-widget mb-60">
                <h3 className="widget-title">Latest Post</h3>
                <div className="single-latest-post-widget">
                    <h5><Link to="/">Complete Solution For Your Land And Garden Design</Link></h5>
                    <span>25 October 2021</span>
                </div>
                <div className="single-latest-post-widget">
                    <h5><Link to="/">The High Quality Landscap Solutions From Landi</Link></h5>
                    <span>25 October 2021</span>
                </div>
                <div className="single-latest-post-widget">
                    <h5><Link to="/">5 Tips For Landscape And Gardening Solutions</Link></h5>
                    <span>25 October 2021</span>
                </div>
            </div>
        </>
    )
}

export default LatestPostWidget;