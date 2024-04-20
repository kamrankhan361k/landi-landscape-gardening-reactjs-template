import React from 'react'
import HeaderTop from '../common/header/HeaderTop';
import HeaderBottomTwo from '../common/header/HeaderBottomTwo';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import breadcrumbBg from '../assets/images/breadcrumb/1.jpg';
import BlogStyleThree from '../components/blog/BlogStyleThree';
import Subscribe from '../components/subscribe/Subscribe';
import FooterTwo from '../common/footer/FooterTwo';

const Blog = () => {
    return (
        <>
            <HeaderTop />
            <HeaderBottomTwo />
            <Breadcrumb 
                breadcrumbBg={breadcrumbBg}
                heading="Our Blog"
                description="We are available for 24/7 for Garden & Landscaping Services"
                currentPage="Blog"
            />
            <BlogStyleThree />
            <Subscribe />
            <FooterTwo />
        </>
    )
}

export default Blog