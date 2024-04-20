import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import TeamStyleThreeImg1 from '../../assets/images/team/1.png';
import TeamStyleThreeImg2 from '../../assets/images/team/2.png';
import TeamStyleThreeImg3 from '../../assets/images/team/3.png';
import TeamStyleThreeImg4 from '../../assets/images/team/4.png';
import TeamStyleThreeImg5 from '../../assets/images/team/5.png';
import TeamStyleThreeImg6 from '../../assets/images/team/6.png';
import Pagination from '../pagination/Pagination';

const TeamStyleThreeData = [
    {
        id: uuidv4(),
        img: TeamStyleThreeImg1,
        name: 'Nicolas Murkari',
        position: 'Gardener',
        fbLink: '/',
        twitterLink: '/',
        instagramLink: '/',
        pinterestLink: '/',
    },

    {
        id: uuidv4(),
        img: TeamStyleThreeImg2,
        name: 'Meri Sheraia',
        position: 'Gardener',
        fbLink: '/',
        twitterLink: '/',
        instagramLink: '/',
        pinterestLink: '/',
    },

    {
        id: uuidv4(),
        img: TeamStyleThreeImg3,
        name: 'Nicolas Murkari',
        position: 'Gardener',
        fbLink: '/',
        twitterLink: '/',
        instagramLink: '/',
        pinterestLink: '/',
    },

    {
        id: uuidv4(),
        img: TeamStyleThreeImg4,
        name: 'Nicolas Murkari',
        position: 'Gardener',
        fbLink: '/',
        twitterLink: '/',
        instagramLink: '/',
        pinterestLink: '/',
    },

    {
        id: uuidv4(),
        img: TeamStyleThreeImg5,
        name: 'Sundiya Jheo',
        position: 'Gardener',
        fbLink: '/',
        twitterLink: '/',
        instagramLink: '/',
        pinterestLink: '/',
    },

    {
        id: uuidv4(),
        img: TeamStyleThreeImg6,
        name: 'Nicolas Murkari',
        position: 'Gardener',
        fbLink: '/',
        twitterLink: '/',
        instagramLink: '/',
        pinterestLink: '/',
    },
];

const TeamStyleThreeItem = ({ img, name, position, fbLink, twitterLink, instagramLink, pinterestLink }) => {
    return (
        <>
            <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="single-team-style-1 mb-80 text-center">
                    <div className="single-team-style-1-img">
                        <img src={img} alt="" />
                        <div className="team-social-style-1">
                            <a href={fbLink}><FaFacebookF /></a>
                            <a href={twitterLink}><FaTwitter /></a>
                            <a href={instagramLink}><FaInstagram /></a>
                            <a href={pinterestLink}><FaPinterestP /></a>
                        </div>
                    </div>
                    <h4>{name}</h4>
                    <span className="team-border-bottom">{position}</span>
                </div>
            </div>
        </>
    )
}

const TeamStyleThree = () => {
    return (
        <>
            <div className="team-area white-bg pt-110 pb-110">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="section-title text-center mb-70">
                                <span>Team Members</span>
                                <h2>Dedicated Members 20+</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {TeamStyleThreeData.map((data) => (
                            <TeamStyleThreeItem
                                key={data.id}
                                img={data.img}
                                name={data.name}
                                position={data.position}
                                fbLink={data.fbLink}
                                twitterLink={data.twitterLink}
                                instagramLink={data.instagramLink}
                                pinterestLink={data.pinterestLink}
                            />
                        ))}
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            <Pagination />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeamStyleThree;