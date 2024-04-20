import React from 'react';
import {Link} from 'react-router-dom';

const TagsWidget = () => {
    return (
        <>
            <div className="widget tag-cloud-widget mb-60">
                <h3 className="widget-title">Tags</h3>
                <Link to="/" className="l-btn">Tree</Link>
                <Link to="/" className="l-btn">Garden</Link>
                <Link to="/" className="l-btn">Gardening</Link>
            </div>
        </>
    )
}

export default TagsWidget;