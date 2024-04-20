import React from 'react';
import {Link} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { FaLongArrowAltRight } from 'react-icons/fa';
import ProjectStyleThreeImg1 from '../../assets/images/project/landscape-design.jpg';
import ProjectStyleThreeImg2 from '../../assets/images/project/tree-plantation.jpg';
import ProjectStyleThreeImg3 from '../../assets/images/project/watering.jpg';

const ProjectStyleThreeData = [
    
    {
        id: uuidv4(),
        img: ProjectStyleThreeImg1,
        heading: 'Landscape Design',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore',
        btnLink: '/service-details',
    },

    {
        id: uuidv4(),
        img: ProjectStyleThreeImg2,
        heading: 'Tree Plantation',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore',
        btnLink: '/service-details',
    },

    {
        id: uuidv4(),
        img: ProjectStyleThreeImg3,
        heading: 'Watering',
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore',
        btnLink: '/service-details',
    },

];

const ProjectStyleThreeItem = ({ img, heading, description, btnLink }) => {
    return (
        <>
            <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="single-project-isotope bg-property mb-25" style={{ backgroundImage: `url(${img})` }}>
                    <div className="project-isotope-content-wrapper">
                        <div className="portfolio-content">
                            <h3>{heading}</h3>
                            <p>{description}</p>
                            <Link to={btnLink}>Read More <FaLongArrowAltRight /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const ProjectStyleThree = () => {
    return (
        <>
            <div className="project-area gray-bg-2 pt-110 pb-110">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-xl-9 col-lg-8 col-md-7 col-xm-12">
                            <div className="section-title mb-70">
                                <span>Our Projects</span>
                                <h2>We have done more than 534+ <br /> successful projects</h2>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-5 col-xm-12 text-xl-end text-lg-end text-md-end text-sm-center">
                            <Link to="/" className="l-btn">More Project</Link>
                        </div>
                    </div>
                    <div className="row">
                        {ProjectStyleThreeData.map((data) => (
                            <ProjectStyleThreeItem
                                key={data.id}
                                heading={data.heading}
                                description={data.description}
                                img={data.img}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectStyleThree;
