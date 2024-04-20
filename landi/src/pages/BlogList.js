import React from 'react';
import HeaderTop from '../common/header/HeaderTop';
import HeaderBottomTwo from '../common/header/HeaderBottomTwo';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import breadcrumbBg from '../assets/images/breadcrumb/1.jpg';
import BlogStyleFour from '../components/blog/BlogStyleFour';
import Subscribe from '../components/subscribe/Subscribe';
import FooterTwo from '../common/footer/FooterTwo';

const BlogList = () => {
    return (
        <>
            <HeaderTop />
            <HeaderBottomTwo />
            <Breadcrumb breadcrumbBg={breadcrumbBg} heading="Blog List" description="We are available for 24/7 for Garden & Landscaping Services" currentPage="Blog List" />
            <BlogStyleFour />
            <Subscribe />
            <FooterTwo />
        </>
    )
}

export default BlogList;