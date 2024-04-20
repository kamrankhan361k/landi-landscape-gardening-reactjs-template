import React from 'react';
import {Link} from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import BlogStyleFourImg1 from '../../assets/images/blog/bl-1.jpg';
import BlogStyleFourImg2 from '../../assets/images/blog/bl-2.jpg';
import BlogStyleFourImg3 from '../../assets/images/blog/bl-3.jpg';
import Pagination from '../pagination/Pagination';
import SearchWidget from '../widgets/SearchWidget';
import CategoryWidget from '../widgets/CategoryWidget';
import LatestPostWidget from '../widgets/LatestPostWidget';
import TagsWidget from '../widgets/TagsWidget';
import ContactWidget from '../widgets/ContactWidget';
import QuoteWidget from '../widgets/QuoteWidget';

const BlogStyleFourData = [
    
    {
        id: uuidv4(),
        img: BlogStyleFourImg1,
        parentCat: 'Gardening',
        regularCat: 'Nursery',
        heading: 'Complete Solution For Your Land And Garden Design.',
        date: '25 October 2021',
        author: 'Andrew Phili',
        description: 'There are many variations of passages the majority have suffered alteration form',
        btnLink: '/service-details',
        btnText: 'Read More',
    },
    
    {
        id: uuidv4(),
        img: BlogStyleFourImg2,
        parentCat: 'Gardening',
        regularCat: 'Nursery',
        heading: 'The High Quality Landscape Solutions From Landi',
        date: '25 October 2021',
        author: 'Andrew Phili',
        description: 'There are many variations of passages the majority have suffered alteration form',
        btnLink: '/',
        btnText: 'Read More',
    },
    
    {
        id: uuidv4(),
        img: BlogStyleFourImg3,
        parentCat: 'Gardening',
        regularCat: 'Nursery',
        heading: '5 Tips For Landscape And Gardening Solutions',
        date: '25 October 2021',
        author: 'Andrew Phili',
        description: 'There are many variations of passages the majority have suffered alteration form',
        btnLink: '/',
        btnText: 'Read More',
    },
    
    {
        id: uuidv4(),
        img: BlogStyleFourImg2,
        parentCat: 'Gardening',
        regularCat: 'Nursery',
        heading: 'The High Quality Landscape Solutions From Landi',
        date: '25 October 2021',
        author: 'Andrew Phili',
        description: 'There are many variations of passages the majority have suffered alteration form',
        btnLink: '/',
        btnText: 'Read More',
    },
    
    {
        id: uuidv4(),
        img: BlogStyleFourImg1,
        parentCat: 'Gardening',
        regularCat: 'Nursery',
        heading: 'Complete Solution For Your Land And Garden Design.',
        date: '25 October 2021',
        author: 'Andrew Phili',
        description: 'There are many variations of passages the majority have suffered alteration form',
        btnLink: '/',
        btnText: 'Read More',
    },
    

];

const BlogStyleFourItem = ({ img, parentCat, regularCat, heading, date, author, description, btnLink, btnText }) => {
    return (
        <>
            <div className="col-xl-12">
                <div className="single-blog-wrapper mb-60 border-bottom-1">
                    <div className="blog-img">
                        <img src={img} className="img-fluid" alt="" />
                        <Link to="/"><FaPlus /></Link>
                    </div>
                    <div className="blog-content mb-60">
                        <ul className="cat-list mt-30 mb-20">
                            <li className="parent-cat"><Link to="/">{parentCat}</Link></li>
                            <li><Link to="/">{regularCat}</Link></li>
                        </ul>
                        <h2><Link to="/">{heading}</Link></h2>
                        <ul className="post-meta mb-25">
                            <li><Link to="/">{date}</Link></li>
                            <li><span>By</span><Link to="/">{author}</Link></li>
                        </ul>
                        <p className="mb-35">{description}</p>
                        <Link to={btnLink} className="l-btn">{btnText}</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

const BlogStyleFour = () => {
    return (
        <>
            <div className="blog-list pt-110 pb-110">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 col-md-12 pr-50">
                            <div className="row">
                                <div className="row">
                                    {BlogStyleFourData.map((data) => (
                                        <BlogStyleFourItem
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
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <Pagination />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12 pr-50">
                            <SearchWidget />
                            <CategoryWidget />
                            <LatestPostWidget />
                            <TagsWidget />
                            <ContactWidget />
                            <QuoteWidget />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogStyleFour;