import React from 'react';
import {Link} from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

const ServiceWidget = () => {
    return (
        <>
            <div className="widget service-list-widget mb-60">
                <h3 className="widget-title">Our Services</h3>
                <ul>
                    <li><Link to="/">Landscape Design <FaArrowRight /></Link></li>
                    <li><Link to="/">Plant Growing <FaArrowRight /></Link></li>
                    <li><Link to="/">Branch Cutting <FaArrowRight /></Link></li>
                    <li><Link to="/">Flower Scaping <FaArrowRight /></Link></li>
                    <li><Link to="/">Tree Planting <FaArrowRight /></Link></li>
                    <li><Link to="/">Rubbish Removal <FaArrowRight /></Link></li>
                </ul>
            </div>
        </>
    )
}

export default ServiceWidget;