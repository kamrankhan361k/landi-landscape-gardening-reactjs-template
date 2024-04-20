import React from 'react';
import HeaderTop from '../common/header/HeaderTop';
import HeaderBottomTwo from '../common/header/HeaderBottomTwo';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import breadcrumbBg from '../assets/images/breadcrumb/1.jpg';
import ProjectStyleTwo from '../components/project/ProjectStyleTwo';
import CtaTwo from '../components/cta/CtaTwo';
import WhyChoseUsTwo from '../components/why-choose-us/WhyChoseUsTwo';
import Subscribe from '../components/subscribe/Subscribe';
import FooterTwo from '../common/footer/FooterTwo';

const ProjectTwo = () => {
    return (
        <>
            <HeaderTop />
            <HeaderBottomTwo />
            <Breadcrumb 
                breadcrumbBg={breadcrumbBg}
                heading="Project 2"
                description="We are available for 24/7 for Garden & Landscaping Services"
                currentPage="Project 2"
            />
            <ProjectStyleTwo />
            <CtaTwo />
            <WhyChoseUsTwo />
            <Subscribe />
            <FooterTwo />

        </>
    )
}

export default ProjectTwo