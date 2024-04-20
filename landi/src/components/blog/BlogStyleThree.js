import React from 'react';
import {Link} from 'react-router-dom';
import { FaPlus, FaLongArrowAltRight } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import BlogStyleThreeImg1 from '../../assets/images/blog/1.jpg';
import BlogStyleThreeImg2 from '../../assets/images/blog/2.jpg';
import BlogStyleThreeImg3 from '../../assets/images/blog/3.jpg';
import Pagination from '../pagination/Pagination';

const BlogStyleThreeData = [
    
    {
        id: uuidv4(),
        img: BlogStyleThreeImg1,
        parentCat: 'Gardening',
        regularCat: 'Nursery',
        heading: 'Complete Solution For Your Land And Garden Design.',
        date: '25 October 2021',
        author: 'Andrew Phili',
        btnLink: '/service-details',
        btnText: 'Read More',
    },
    
    {
        id: uuidv4(),
        img: BlogStyleThreeImg2,
        parentCat: 'Gardening',
        regularCat: 'Nursery',
        heading: 'The High Quality Landscape Solutions From Landi',
        date: '25 October 2021',
        author: 'Andrew Phili',
        btnLink: '/',
        btnText: 'Read More',
    },
    
    {
        id: uuidv4(),
        img: BlogStyleThreeImg3,
        parentCat: 'Gardening',
        regularCat: 'Nursery',
        heading: '5 Tips For Landscape And Gardening Solutions',
        date: '25 October 2021',
        author: 'Andrew Phili',
        btnLink: '/',
        btnText: 'Read More',
    },
    
    {
        id: uuidv4(),
        img: BlogStyleThreeImg1,
        parentCat: 'Gardening',
        regularCat: 'Nursery',
        heading: 'Complete Solution For Your Land And Garden Design.',
        date: '25 October 2021',
        author: 'Andrew Phili',
        btnLink: '/service-details',
        btnText: 'Read More',
    },
    
    {
        id: uuidv4(),
        img: BlogStyleThreeImg2,
        parentCat: 'Gardening',
        regularCat: 'Nursery',
        heading: 'The High Quality Landscape Solutions From Landi',
        date: '25 October 2021',
        author: 'Andrew Phili',
        btnLink: '/',
        btnText: 'Read More',
    },
    
    {
        id: uuidv4(),
        img: BlogStyleThreeImg3,
        parentCat: 'Gardening',
        regularCat: 'Nursery',
        heading: '5 Tips For Landscape And Gardening Solutions',
        date: '25 October 2021',
        author: 'Andrew Phili',
        btnLink: '/',
        btnText: 'Read More',
    },
    
    {
        id: uuidv4(),
        img: BlogStyleThreeImg1,
        parentCat: 'Gardening',
        regularCat: 'Nursery',
        heading: 'Complete Solution For Your Land And Garden Design.',
        date: '25 October 2021',
        author: 'Andrew Phili',
        btnLink: '/service-details',
        btnText: 'Read More',
    },
    
    {
        id: uuidv4(),
        img: BlogStyleThreeImg2,
        parentCat: 'Gardening',
        regularCat: 'Nursery',
        heading: 'The High Quality Landscape Solutions From Landi',
        date: '25 October 2021',
        author: 'Andrew Phili',
        btnLink: '/',
        btnText: 'Read More',
    },
    
    {
        id: uuidv4(),
        img: BlogStyleThreeImg3,
        parentCat: 'Gardening',
        regularCat: 'Nursery',
        heading: '5 Tips For Landscape And Gardening Solutions',
        date: '25 October 2021',
        author: 'Andrew Phili',
        btnLink: '/',
        btnText: 'Read More',
    },
    

];

const BlogStyleThreeItem = ({ img, parentCat, regularCat, heading, date, author, btnLink, btnText }) => {
    return (
        <>
            <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="single-blog-wrapper pt-10 pr-10 pb-10 pl-10 mb-25 box-shadow-1">
                    <div className="blog-img bg-hover-style-1">
                        <img src={img} alt="" />
                        <Link to=""><FaPlus /></Link>
                    </div>
                    <div className="blog-content pt-20 pr-20 pb-20 pl-20">
                        <ul className="cat-list mt-30 mb-30">
                            <li className="parent-cat"><Link to="/">{parentCat}</Link></li>
                            <li><Link to="/">{regularCat}</Link></li>
                        </ul>
                        <h4><Link to="/">{heading}</Link></h4>
                        <ul className="post-meta mb-30">
                            <li><Link to="/">{date}</Link></li>
                            <li><span>By</span> <Link to="/">{author}</Link></li>
                        </ul>
                        <Link to={btnLink} className="l-read-more">{btnText}<FaLongArrowAltRight /></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

const BlogStyleThree = () => {
    return (
        <>
            <div className="blog-area bg-white pt-110 pb-110">
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
                        {BlogStyleThreeData.map((data) => (
                            <BlogStyleThreeItem
                                key={data.id}
                                img={data.img}
                                parentCat={data.parentCat}
                                regularCat={data.regularCat}
                                heading={data.heading}
                                date={data.date}
                                author={data.author}
                                description={data.description}
                                btnLink={data.btnLink}
                                btnText={data.btnText}
                            />
                        ))}
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            <Pagination />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogStyleThree;