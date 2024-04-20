import React, { useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import { AiOutlineBars } from 'react-icons/ai';
import { CgChevronDown, CgChevronLeft } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const menuData = [
    {
        title: 'Home',
        path: '/',
        iconClosed: <CgChevronLeft />,
        iconOpened: <CgChevronDown />,

        subNav: [
            {
                title: 'Home 1',
                path: '/',
            },
            {
                title: 'Home 2',
                path: '/home-two',
            },

            {
                title: 'Home 3',
                path: '/home-three',
            },
        ],
    },

    {
        title: 'About',
        path: '/about',
    },

    {
        title: 'Services',
        path: '#',

        iconClosed: <CgChevronLeft />,
        iconOpened: <CgChevronDown />,

        subNav: [
            {
                title: 'Service 1',
                path: '/service-one',
                cName: 'sub-nav',
            },
            {
                title: 'Service 2',
                path: '/service-two',
                cName: 'sub-nav',
            },
            {
                title: 'Service Details',
                path: '/service-details',
            },
        ],
    },

    {
        title: 'Page',
        path: '#',

        iconClosed: <CgChevronLeft />,
        iconOpened: <CgChevronDown />,

        subNav: [
            {
                title: 'Project 1',
                path: '/project-one',
                cName: 'sub-nav',
            },
            {
                title: 'Project 2',
                path: '/project-two',
                cName: 'sub-nav',
            },
            {
                title: 'Project Details',
                path: '/project-details',
            },
            {
                title: 'Team',
                path: '/team',
            },
            {
                title: 'Gallery',
                path: '/gallery',
            },
            {
                title: 'Pricing',
                path: '/pricing',
            },
            {
                title: 'FAQ',
                path: '/faq',
            },
            {
                title: '404',
                path: '/error',
            },
        ],
    },

    {
        title: 'Blog',
        path: '#',

        iconClosed: <CgChevronLeft />,
        iconOpened: <CgChevronDown />,

        subNav: [
            {
                title: 'Blog',
                path: '/blog',
                cName: 'sub-nav',
            },
            {
                title: 'Blog List',
                path: '/blog-list',
                cName: 'sub-nav',
            },
            {
                title: 'Blog Details',
                path: '/blog-details',
            },
        ],
    },

    {
        title: 'Contact',
        path: '/contact',
    },
];

const SidebarLink = styled(Link)`
    display: flex;
    color: #fff;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 50px;
    text-decoration: none;
    font-size: 16px;
    font-weight: 400;
    &:hover {
        background: #cdb30c;
        color: #fff;
        cursor: pointer;
    }
`;

const SidebarLabel = styled.span`
    margin-left: 16px;
    color: #fff;
    font-weight: 400;
`;

const DropdownLink = styled(Link)`
    height: 60px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #fff;
    font-size: 16px;
    &:hover,
    &:active {
        background: #cdb30c;
        cursor: pointer;
        color: #fff;
    }
`;

const SubMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);

    return (
        <>
            <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>
                    {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}
                </div>
            </SidebarLink>
            {subnav &&
                item.subNav.map((data, index) => (
                    <DropdownLink to={data.path} key={index}>
                        {item.icon}
                        <SidebarLabel>{data.title}</SidebarLabel>
                    </DropdownLink>
                ))}
        </>
    );
};

const NavIcon = styled(Link)`
    font-size: 2rem;
    height: 50px;
    display: flex;
    align-items: center;
    margin-left: 20px;
`;

const SidebarNav = styled.nav`
    background-color: #523906;
    width: 300px;
    height: 100%;
    position: fixed;
    overflow-y: scroll;
    scroll-behavior: smooth;
    -webkit-scroll-behavior: smooth;
    box-shadow: 0 13px 35px -12px rgba(35, 35, 35, 0.15);
    top: 0;
    right: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    z-index: 99999;
`;

const SidebarWrap = styled.div`
    width: 100%;
`;

const MobileMenu = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <>
                <NavIcon className="d-lg-none" to="#" style={{ justifyContent: 'flex-end' }}>
                    <AiOutlineBars onClick={showSidebar} />
                </NavIcon>

                <SidebarNav sidebar={sidebar}>
                    <SidebarWrap>
                        <NavIcon to="#">
                            <AiIcons.AiOutlineClose
                                style={{
                                    color: 'white',
                                    fontSize: '18px',
                                    justifyContent: 'flex-start',
                                }}
                                onClick={showSidebar}
                            />
                        </NavIcon>
                        {menuData.map((item, index) => (
                            <SubMenu item={item} key={index} />
                        ))}
                    </SidebarWrap>
                </SidebarNav>
            </>
        </>
    );
};

export default MobileMenu;