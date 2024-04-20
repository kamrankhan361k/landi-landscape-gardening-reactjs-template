import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <div className="main-menu text-center">
            <nav id="mobile-menu">
                <ul>
                    <li>
                        <Link to="#">Home</Link>
                        <ul className="submenu">
                            <li><Link to="/">Home 1</Link></li>
                            <li><Link to="/home-two">Home 2</Link></li>
                            <li><Link to="/home-three">Home 3</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="#">Services</Link>
                        <ul className="submenu">
                            <li><Link to="/service-one">Service 1</Link></li>
                            <li><Link to="/service-two">Service 2</Link></li>
                            <li><Link to="/service-details">Service Details</Link></li>
                        </ul>
                    </li>
                    <li><Link to="#">Page</Link>
                        <ul className="submenu">
                            <li><Link to="/project-one">Project 1</Link></li>
                            <li><Link to="/project-two">Project 2</Link></li>
                            <li><Link to="/project-details">Project Details</Link></li>
                            <li><Link to="/team">Team</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                            <li><Link to="/pricing">Pricing</Link></li>
                            <li><Link to="/faq">FAQ</Link></li>
                            <li><Link to="/error">404</Link></li>
                        </ul>
                    </li>
                    <li><Link to="#">Blog</Link>
                        <ul className="submenu">
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/blog-list">Blog List</Link></li>
                            <li><Link to="/blog-details">Blog Details</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;