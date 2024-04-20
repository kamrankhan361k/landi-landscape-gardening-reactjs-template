import React from 'react';
import {Link} from 'react-router-dom';
import { FaPlus, FaLongArrowAltRight } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import BlogStyleOneImg1 from '../../assets/images/blog/1.jpg';
import BlogStyleOneImg2 from '../../assets/images/blog/2.jpg';
import BlogStyleOneImg3 from '../../assets/images/blog/3.jpg';

const BlogStyleOneData = [
    
    {
        id: uuidv4(),
        img: BlogStyleOneImg1,
        imgAlt: ' Post Img',
        parentCat: 'Gardening',
        subCat: 'Nursery',
        heading: 'Complete Solution For Your Land And Garden Design.',
        postPublishDate: '25 October 2021',
        postAuthor: 'Andrew Phili',
        postLink: '/blog-details',
    },
    
    {
        id: uuidv4(),
        img: BlogStyleOneImg2,
        imgAlt: ' Post Img',
        parentCat: 'Gardening',
        subCat: 'Nursery',
        heading: 'The High Quality Landscape Solutions From Landi',
        postPublishDate: '25 October 2021',
        postAuthor: 'Andrew Phili',
        postLink: '/blog-details',
    },
    
    {
        id: uuidv4(),
        img: BlogStyleOneImg3,
        imgAlt: ' Post Img',
        parentCat: 'Gardening',
        subCat: 'Nursery',
        heading: '5 Tips For Landscape And Gardening Solutions',
        postPublishDate: '25 October 2021',
        postAuthor: 'Andrew Phili',
        postLink: '/blog-details',
    },

];

const BlogStyleOneItem = ({ img, imgAlt, parentCat, subCat, heading, postPublishDate, postAuthor, postLink }) => {
    return (
        <>
            <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="single-blog-wrapper pt-10 pr-10 pb-10 pl-10 mb-25 box-shadow-1">
                    <div className="blog-img bg-hover-style-1">
                        <img src={img} alt={imgAlt} />
                        <Link to={postLink}><FaPlus /></Link>
                    </div>
                    <div className="blog-content pt-20 pr-20 pb-20 pl-20">
                        <ul className="cat-list mt-30 mb-30">
                            <li className="parent-cat"><Link to="/">{parentCat}</Link></li>
                            <li><Link to="/">{subCat}</Link></li>
                        </ul>
                        <h4><Link to={postLink}>{heading}</Link></h4>
                        <ul className="post-meta mb-30">
                            <li><Link to="/">{postPublishDate}</Link></li>
                            <li><span>By</span> <Link to="/">{postAuthor}</Link></li>
                        </ul>
                        <Link to={postLink} className="l-read-more">Read More <FaLongArrowAltRight /></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

const BlogStyleOne = () => {
    return (
        <>
            <div className="blog-area white-bg pt-110 pb-110">
                <div className="container">
                    <div className="row">
                        <div className="section-title text-center mb-70">
                            <span>Latest News Blog</span>
                            <h2>Articles daily updated latest articles <br /> directly from the blog</h2>
                        </div>
                    </div>
                    <div className="row">
                        {BlogStyleOneData.map((data) => (
                            <BlogStyleOneItem
                                key={data.id}
                                img={data.img}
                                imgAlt={data.imgAlt}
                                parentCat={data.parentCat}
                                subCat={data.subCat}
                                heading={data.heading}
                                postPublishDate={data.postPublishDate}
                                postAuthor={data.postAuthor}
                                postLink={data.postLink}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogStyleOne;