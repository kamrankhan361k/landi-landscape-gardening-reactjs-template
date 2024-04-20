import React from 'react';
import HeaderTop from '../common/header/HeaderTop';
import HeaderBottomTwo from '../common/header/HeaderBottomTwo';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import breadcrumbBg from '../assets/images/breadcrumb/1.jpg';
import TeamStyleThree from '../components/team/TeamStyleThree';
import CtaTwo from '../components/cta/CtaTwo';
import TeamStyleFour from '../components/team/TeamStyleFour';
import Subscribe from '../components/subscribe/Subscribe';
import FooterTwo from '../common/footer/FooterTwo';

const Team = () => {
    return (
        <>
            <HeaderTop />
            <HeaderBottomTwo />
            <Breadcrumb breadcrumbBg={breadcrumbBg} heading="Our Team" description="We are available for 24/7 for Garden & Landscaping Services" currentPage="Our Team" />
            <TeamStyleThree />
            <CtaTwo />
            <TeamStyleFour />
            <Subscribe />
            <FooterTwo />
        </>
    )
}

export default Team;