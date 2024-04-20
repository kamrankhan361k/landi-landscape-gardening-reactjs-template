import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ProjectStyleTwoImg1 from '../../assets/images/project/landscape-design.jpg';
import ProjectStyleTwoImg2 from '../../assets/images/project/tree-plantation.jpg';
import ProjectStyleTwoImg3 from '../../assets/images/project/watering.jpg';
import ProjectStyleTwoImg4 from '../../assets/images/project/plant-growing.jpg';
import ProjectStyleTwoImg5 from '../../assets/images/project/garden-care.jpg';
import ProjectStyleTwoImg6 from '../../assets/images/project/flower-scaping.jpg';
import ProjectStyleTwoImg7 from '../../assets/images/project/commercial-gardening.jpg';
import ProjectStyleTwoImg8 from '../../assets/images/project/outdoor-scaping.jpg';
import ProjectStyleTwoImg9 from '../../assets/images/project/branch-cutting.jpg';

const ProjectStyleTwoData = [
    
    {
        id: uuidv4(),
        img: ProjectStyleTwoImg1,
        heading: 'Landscape Design',
        description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime',
        btnLink: '/project-details',
        category: 'planting',
    },
    
    {
        id: uuidv4(),
        img: ProjectStyleTwoImg2,
        heading: 'Tree Plantation',
        description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime',
        btnLink: '/project-details',
        category: 'lawn',
    },
    
    {
        id: uuidv4(),
        img: ProjectStyleTwoImg3,
        heading: 'Watering',
        description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime',
        btnLink: '/project-details',
        category: 'video',
    },
    
    {
        id: uuidv4(),
        img: ProjectStyleTwoImg4,
        heading: 'Plant Growing',
        description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime',
        btnLink: '/project-details',
        category: 'planting',
    },
    
    {
        id: uuidv4(),
        img: ProjectStyleTwoImg5,
        heading: 'Garden Care',
        description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime',
        btnLink: '/project-details',
        category: 'lawn',
    },
    
    {
        id: uuidv4(),
        img: ProjectStyleTwoImg6,
        heading: 'Flower Scaping',
        description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime',
        btnLink: '/project-details',
        category: 'snow',
    },
    
    {
        id: uuidv4(),
        img: ProjectStyleTwoImg7,
        heading: 'Commercial Gardening',
        description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime',
        btnLink: '/project-details',
        category: 'video',
    },
    
    {
        id: uuidv4(),
        img: ProjectStyleTwoImg8,
        heading: 'Outdoor Scaping',
        description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime',
        btnLink: '/project-details',
        category: 'garden',
    },
    
    {
        id: uuidv4(),
        img: ProjectStyleTwoImg9,
        heading: 'Branch Cutting',
        description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime',
        btnLink: '/project-details',
        category: 'garden',
    },

];

const ProjectStyleTwoItem = ({ img, heading, description, btnLink }) => {
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

const CategoryBtn = ({ name, handleSetCategory, label, className }) => {
    return (
        <>
            <button className={className} type="button" onClick={() => handleSetCategory(name)}>
                {label}
            </button>
        </>
    )
}

const ProjectStyleTwo = () => {
    // STATES
    const [category, setCategory] = useState('all');
    const [projectStyleTwoItem, setProjectStyleTwoItem] = useState([]);

    useEffect(() => {
        category === 'all'
            ? setProjectStyleTwoItem(ProjectStyleTwoData)
            : setProjectStyleTwoItem(ProjectStyleTwoData.filter((data) => data.category === category));
    }, [category]);
    return (
        <>
            <div className="project-area pt-110 pb-110">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="section-title text-center mb-70">
                                <span>Our Projects</span>
                                <h2>Our Successful Projects</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="portfolio-menu mb-60">
                                <CategoryBtn
                                    className={category === 'all' ? 'active' : null}
                                    name="all"
                                    label="All"
                                    handleSetCategory={setCategory}
                                />
                                <CategoryBtn
                                    className={category === 'lawn' ? 'active' : null}
                                    name="lawn"
                                    label="Lawn Care"
                                    handleSetCategory={setCategory}
                                />
                                <CategoryBtn
                                    className={category === 'video' ? 'active' : null}
                                    name="video"
                                    label="Video Gallery"
                                    handleSetCategory={setCategory}
                                />
                                <CategoryBtn
                                    className={category === 'garden' ? 'active' : null}
                                    name="garden"
                                    label="Garden Care"
                                    handleSetCategory={setCategory}
                                />
                                <CategoryBtn
                                    className={category === 'planting' ? 'active' : null}
                                    name="planting"
                                    label="Planting"
                                    handleSetCategory={setCategory}
                                />
                                <CategoryBtn
                                    className={category === 'snow' ? 'active' : null}
                                    name="snow"
                                    label="Snow Removal"
                                    handleSetCategory={setCategory}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row portfolio-active">
                        {projectStyleTwoItem.map(
                            (item, length) =>
                                length <= '9' && (
                                    <ProjectStyleTwoItem
                                        key={item.id}
                                        img={item.img}
                                        heading={item.heading}
                                        description={item.description}
                                        category={item.category}
                                        btnLink={item.btnLink}
                                    />
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectStyleTwo;

