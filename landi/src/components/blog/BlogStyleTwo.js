import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDoubleRight, FaPlus } from "react-icons/fa";
import BlogStyleTwoImg1 from '../../assets/images/blog/l-1.jpg';
import BlogStyleTwoImg2 from '../../assets/images/blog/l-2.jpg';

const BlogStyleTwo = () => {
    return (
        <>
            <div className="blog-are white-bg pt-110 pb-110">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="section-title text-center mb-70">
                                <span>Latest News & Blog</span>
                                <h2>Articles daily updated latest articles <br /> directly from the blog</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 col-md-6">
                            <div className="single-blog-wrapper box-shadow-1">
                                <div className="blog-img bg-hover-style-1">
                                    <img src={BlogStyleTwoImg1} alt="" />
                                    <Link to="/"><FaPlus /></Link>
                                </div>
                                <div className="blog-content pb-25 pl-30 pr-30">
                                    <ul className="cat-list mt-30 mb-20">
                                        <li className="parent-cat"><Link to="/">Gardening</Link></li>
                                        <li><Link to="/">Nursery</Link></li>
                                    </ul>
                                    <h4><Link to="/">Complete Solution For Your Land And Garden Design.</Link></h4>
                                    <ul className="post-meta pt-15 pb-15 mb-30 border-top-1 border-bottom-1 theme-border-color-1">
                                        <li><Link to="/">25 October 2021</Link></li>
                                        <li><span>By</span> <Link to="/">Andrew Phili</Link></li>
                                    </ul>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority <br /> suffered alteration in some form, by injected humour,</p>
                                    <Link to="/" className="l-read-more">Read More <FaAngleDoubleRight /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="single-blog-wrapper box-shadow-1">
                                <div className="blog-img bg-hover-style-1">
                                    <img src={BlogStyleTwoImg2} alt="" />
                                    <Link to="/"><FaPlus /></Link>
                                </div>
                                <div className="blog-content pb-25 pl-30 pr-30">
                                    <ul className="cat-list mt-30 mb-20">
                                        <li className="parent-cat"><Link to="/">Gardening</Link></li>
                                        <li><Link to="/">Nursery</Link></li>
                                    </ul>
                                    <h4><Link to="/">5 Tips For Landscape And Gardening Solutions.</Link></h4>
                                    <ul className="post-meta pt-15 pb-15 mb-30 border-top-1 border-bottom-1 theme-border-color-1">
                                        <li><Link to="/">25 October 2021</Link></li>
                                        <li><span>By</span> <Link to="/">Andrew Phili</Link></li>
                                    </ul>
                                    <p>There are many variations of passages Lorem Ipsum available,</p>
                                    <Link to="/" className="l-read-more">Read More <FaAngleDoubleRight /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogStyleTwo;