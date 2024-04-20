import React from 'react';
import HeaderTop from '../common/header/HeaderTop';
import HeaderBottomTwo from '../common/header/HeaderBottomTwo';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import breadcrumbBg from '../assets/images/breadcrumb/1.jpg';
import ProjectStyleFive from '../components/project/ProjectStyleFive';
import CtaTwo from '../components/cta/CtaTwo';
import WhyChoseUsTwo from '../components/why-choose-us/WhyChoseUsTwo';
import Subscribe from '../components/subscribe/Subscribe';
import FooterTwo from '../common/footer/FooterTwo';

const ProjectOne = () => {
    return (
        <>
            <HeaderTop />
            <HeaderBottomTwo />
            <Breadcrumb 
                breadcrumbBg={breadcrumbBg}
                heading="Project 1"
                description="We are available for 24/7 for Garden & Landscaping Services"
                currentPage="Project 1" 
            />
            <ProjectStyleFive />
            <CtaTwo />
            <WhyChoseUsTwo />
            <Subscribe />
            <FooterTwo />
           
        </>
    )
}

export default ProjectOne