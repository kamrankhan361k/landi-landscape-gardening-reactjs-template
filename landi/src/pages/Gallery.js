import React from 'react';
import HeaderTop from '../common/header/HeaderTop';
import HeaderBottomTwo from '../common/header/HeaderBottomTwo';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import breadcrumbBg from '../assets/images/breadcrumb/1.jpg';
import ProjectStyleFour from '../components/project/ProjectStyleFour';
import CtaTwo from '../components/cta/CtaTwo';
import WhyChoseUsTwo from '../components/why-choose-us/WhyChoseUsTwo';
import Subscribe from '../components/subscribe/Subscribe';
import FooterTwo from '../common/footer/FooterTwo';

const Gallery = () => {
    return (
        <>
            <HeaderTop />
            <HeaderBottomTwo />
            <Breadcrumb 
                breadcrumbBg={breadcrumbBg}
                heading="Classic Gallery"
                description="We are available for 24/7 for Garden & Landscaping Services"
                currentPage="Classic Gallery" 
            />
            <ProjectStyleFour />
            <CtaTwo />
            <WhyChoseUsTwo />
            <Subscribe />
            <FooterTwo />
           
        </>
    )
}

export default Gallery;