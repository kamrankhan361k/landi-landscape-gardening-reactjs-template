import React from 'react';
import HeaderTop from '../common/header/HeaderTop';
import HeaderBottomTwo from '../common/header/HeaderBottomTwo';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import breadcrumbBg from '../assets/images/breadcrumb/1.jpg';
import ContactForm from '../components/contact/ContactForm';
import TestimonialStyleThree from '../components/testimonial/TestimonialStyleThree';
import ContactMap from '../components/contact/ContactMap';
import Subscribe from '../components/subscribe/Subscribe';
import FooterTwo from '../common/footer/FooterTwo';

const Contact = () => {
    return (
        <>
            <HeaderTop />
            <HeaderBottomTwo />
            <Breadcrumb 
                breadcrumbBg={breadcrumbBg}
                heading="Contact Us"
                description="We are available for 24/7 for Garden & Landscaping Services"
                currentPage="Contact Us" 
            />
            <ContactForm />
            <TestimonialStyleThree />
            <ContactMap />
            <Subscribe />
            <FooterTwo />
        </>
    )
}

export default Contact;