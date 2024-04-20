import React from 'react';
import HeaderTop from '../common/header/HeaderTop';
import HeaderBottomTwo from '../common/header/HeaderBottomTwo';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import breadcrumbBg from '../assets/images/breadcrumb/2.jpg';
import ErrorContent from '../components/error/ErrorContent';
import FooterTwo from '../common/footer/FooterTwo';

const Error = () => {
    return (
            <>
                <HeaderTop />
                <HeaderBottomTwo />
                <Breadcrumb breadcrumbBg={breadcrumbBg} heading="404" description="Opps! You have some problems" currentPage="404" />
                <ErrorContent />
                <FooterTwo />
            </>
    )
}

export default Error;