import React from 'react';
import {Link} from 'react-router-dom';
import FooterBG from '../../assets/images/footer-1.png';
import { FaPhoneAlt, FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const FooterTwo = () => {
    return (
        <>
            <footer className="footer-bg bg-property theme-bg-2" style={{ backgroundImage: `url(${FooterBG})` }}>
                <div className="footer-top position-relative pt-110 pb-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                <div className="footer-widget-1">
                                    <div className="footer-title">
                                        <h4>About Landi</h4>
                                    </div>
                                    <div className="footer-text">
                                        <p>Landi PSD Template is build for Lawn, Landscaping, Garden Ground skeepers, Landscape, Gardening Shops, &amp; other lawn and landscaping related services.</p>
                                    </div>
                                    <div className="footer-info">
                                        <Link to="/"><FaPhoneAlt />(111) 0909 8787 666</Link>
                                    </div>
                                    <div className="footer-social mt-35">
                                        <h5>Follow Us:</h5>
                                        <ul>
                                            <li><Link to="/"><FaFacebookF /></Link></li>
                                            <li><Link to="/"><FaTwitter /></Link></li>
                                            <li><Link to="/"><FaInstagram /></Link></li>
                                            <li><Link to="/"><FaPinterestP /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-12">
                                <div className="footer-widget-2">
                                    <div className="footer-title">
                                        <h4>Quick Links</h4>
                                    </div>
                                    <div className="footer-menu">
                                        <ul>
                                            <li><Link to="/">Contact Us</Link></li>
                                            <li><Link to="/">Team</Link></li>
                                            <li><Link to="/">Our Services</Link></li>
                                            <li><Link to="/">Our Project</Link></li>
                                            <li><Link to="/">About Company</Link></li>
                                            <li><Link to="/">News Update</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-12">
                                <div className="footer-widget-3">
                                    <div className="footer-title">
                                        <h4>Our Services</h4>
                                    </div>
                                    <div className="footer-menu">
                                        <ul>
                                            <li><Link to="/">Landscaping</Link></li>
                                            <li><Link to="/">Plant Growing</Link></li>
                                            <li><Link to="/">Branch Cutting</Link></li>
                                            <li><Link to="/">Flower Scaping</Link></li>
                                            <li><Link to="/">Tree Planting</Link></li>
                                            <li><Link to="/">Rubbish Removal</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                <div className="footer-widget-4">
                                    <div className="footer-title">
                                        <h4>Contact us</h4>
                                    </div>
                                    <div className="footer-text">
                                        <p>Established since 2000. Mission Eland Landscaping Company in US.</p>
                                    </div>
                                    <div className="footer-contact-info pt-20">
                                        <ul>
                                            <li><FaPhoneAlt /><Link to="/">+62 351 154874</Link></li>
                                            <li><FaEnvelope /><Link to="/">landi@gmail.com</Link></li>
                                            <li><FaMapMarkerAlt /><span>House #253, 3rd Floor, Uposhohor 6202, Rajshahi, Bangladesh</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom pt-40 pb-30 bt-1 b-color-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div className="copyright">
                                    <p>© 2022 <Link to="/">Landi</Link>. All right reserved.</p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 text-center text-xl-end text-lg-end text-md-end">
                                <div className="footer-menu">
                                    <ul>
                                        <li><Link to="/">About Landi</Link></li>
                                        <li><Link to="/">Careers</Link></li>
                                        <li><Link to="/">Privacy Policy</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default FooterTwo;