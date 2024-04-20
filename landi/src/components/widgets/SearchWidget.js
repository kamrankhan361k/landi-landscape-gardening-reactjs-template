import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchWidget = () => {
    return (
        <>
            <div className="widget search-widget mb-60">
                <h3 className="widget-title">Search</h3>
                <input type="text" placeholder="Search Here" />
                <button><FaSearch /></button>
            </div>
        </>
    )
}

export default SearchWidget;