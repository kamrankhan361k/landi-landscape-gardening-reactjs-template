import React from "react";
import HeaderTop from "../common/header/HeaderTop";
import HeaderBottomOne from "../common/header/HeaderBottomOne";
import HeroStyleOne from "../components/hero/HeroStyleOne";
import ServiceStyleOne from "../components/services/ServiceStyleOne";
import HomeOneAbout from "../components/home1/HomeOneAbout";
import HomeOneService from "../components/home1/HomeOneService";
import FunFact from "../components/fun-fact/FunFact";
import ProjectStyleOne from "../components/project/ProjectStyleOne";
import WhyChoseUsOne from "../components/why-choose-us/WhyChoseUsOne";
import TestimonialStyleOne from "../components/testimonial/TestimonialStyleOne";
import HomeOneBookAppointment from "../components/home1/HomeOneBookAppointment";
import HowItWorkOne from "../components/how-it-work/HowItWorkOne";
import BlogStyleOne from "../components/blog/BlogStyleOne";
import FooterOne from "../common/footer/FooterOne";
const HomeDefault = () => {
    return (
        <>
            <HeaderTop />
            <HeaderBottomOne />
            <HeroStyleOne />
            <ServiceStyleOne />
            <HomeOneAbout />
            <HomeOneService />
            <FunFact />
            <ProjectStyleOne />
            <WhyChoseUsOne />
            <TestimonialStyleOne />
            <HomeOneBookAppointment />
            <HowItWorkOne />
            <BlogStyleOne />
            <FooterOne />
        </>
    )
}

export default HomeDefault;