import React from 'react';
import HeaderTop from '../common/header/HeaderTop';
import HeaderBottomTwo from '../common/header/HeaderBottomTwo';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import breadcrumbBg from '../assets/images/breadcrumb/1.jpg';
import ServiceStyleTwo from '../components/services/ServiceStyleTwo';
import CtaTwo from '../components/cta/CtaTwo';
import WhyChoseUsTwo from '../components/why-choose-us/WhyChoseUsTwo';
import Subscribe from '../components/subscribe/Subscribe';
import FooterTwo from '../common/footer/FooterTwo';

const ServiceTwo = () => {
    return (
        <>
            <HeaderTop />
            <HeaderBottomTwo />
            <Breadcrumb breadcrumbBg={breadcrumbBg} heading="Services 2" description="We are available for 24/7 for Garden & Landscaping Services" currentPage="Services 2" />
            <ServiceStyleTwo />
            <CtaTwo />
            <WhyChoseUsTwo />
            <Subscribe />
            <FooterTwo />
        </>
    )
}

export default ServiceTwo;