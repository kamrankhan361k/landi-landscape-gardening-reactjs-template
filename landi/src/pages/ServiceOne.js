import React from 'react';
import HeaderTop from '../common/header/HeaderTop';
import HeaderBottomTwo from '../common/header/HeaderBottomTwo';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import breadcrumbBg from '../assets/images/breadcrumb/1.jpg';
import ServiceStyleOne from '../components/services/ServiceStyleOne';
import CtaTwo from '../components/cta/CtaTwo';
import WhyChoseUsTwo from '../components/why-choose-us/WhyChoseUsTwo';
import Subscribe from '../components/subscribe/Subscribe';
import FooterTwo from '../common/footer/FooterTwo';

const ServiceOne = () => {
    return (
        <>
            <HeaderTop />
            <HeaderBottomTwo />
            <Breadcrumb breadcrumbBg={breadcrumbBg} heading="Services 1" description="We are available for 24/7 for Garden & Landscaping Services" currentPage="Services 1" />
            <ServiceStyleOne />
            <CtaTwo />
            <WhyChoseUsTwo />
            <Subscribe />
            <FooterTwo />
        </>
    )
}

export default ServiceOne;