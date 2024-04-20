import React from 'react';
import {Link} from 'react-router-dom';

const CategoryWidget = () => {
    return (
        <>
            <div className="widget category-widget mb-60">
            <h3 className="widget-title">Categories</h3>
                <ul>
                    <li><Link to="/">Garden Design</Link><span>(20)</span></li>
                    <li><Link to="/">Garden Fence</Link><span>(13)</span></li>
                    <li><Link to="/">Gardening</Link><span>(13)</span></li>
                    <li><Link to="/">Grass Cutting</Link><span>(10)</span></li>
                    <li><Link to="/">Landscaping</Link><span>(15)</span></li>
                    <li><Link to="/">Rubbish Removal</Link><span>(18)</span></li>
                </ul>
            </div>
        </>
    )
}

export default CategoryWidget;