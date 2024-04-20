import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import TeamStyleFourImg1 from '../../assets/images/team/st-1.jpg';
import TeamStyleFourImg2 from '../../assets/images/team/st-2.jpg';
import TeamStyleFourImg3 from '../../assets/images/team/st-3.jpg';
import TeamStyleFourImg4 from '../../assets/images/team/st-4.jpg';
import TeamStyleFourImg5 from '../../assets/images/team/st-5.jpg';
import TeamStyleFourImg6 from '../../assets/images/team/st-6.jpg';
import Pagination from '../pagination/Pagination';

const TeamStyleFourData = [
    {
        id: uuidv4(),
        img: TeamStyleFourImg1,
        name: 'Meri Sheraia',
        position: 'Gardener',
        fbLink: '/',
        twitterLink: '/',
        instagramLink: '/',
        pinterestLink: '/',
    },

    {
        id: uuidv4(),
        img: TeamStyleFourImg2,
        name: 'Nicolas Murkari',
        position: 'Gardener',
        fbLink: '/',
        twitterLink: '/',
        instagramLink: '/',
        pinterestLink: '/',
    },

    {
        id: uuidv4(),
        img: TeamStyleFourImg3,
        name: 'Parvin Neloy',
        position: 'Gardener',
        fbLink: '/',
        twitterLink: '/',
        instagramLink: '/',
        pinterestLink: '/',
    },

    {
        id: uuidv4(),
        img: TeamStyleFourImg4,
        name: 'Nicolas Murkari',
        position: 'Gardener',
        fbLink: '/',
        twitterLink: '/',
        instagramLink: '/',
        pinterestLink: '/',
    },

    {
        id: uuidv4(),
        img: TeamStyleFourImg5,
        name: 'Meri Sheraia',
        position: 'Gardener',
        fbLink: '/',
        twitterLink: '/',
        instagramLink: '/',
        pinterestLink: '/',
    },

    {
        id: uuidv4(),
        img: TeamStyleFourImg4,
        name: 'Nicolas Murkari',
        position: 'Gardener',
        fbLink: '/',
        twitterLink: '/',
        instagramLink: '/',
        pinterestLink: '/',
    },

    {
        id: uuidv4(),
        img: TeamStyleFourImg3,
        name: 'Parvin Neloy',
        position: 'Gardener',
        fbLink: '/',
        twitterLink: '/',
        instagramLink: '/',
        pinterestLink: '/',
    },

    {
        id: uuidv4(),
        img: TeamStyleFourImg6,
        name: 'Nicolas Murkari',
        position: 'Gardener',
        fbLink: '/',
        twitterLink: '/',
        instagramLink: '/',
        pinterestLink: '/',
    },
];

const TeamStyleFourItem = ({ img, name, position, fbLink, twitterLink, instagramLink, pinterestLink }) => {
    return (
        <>
            <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="single-team-style-2 mb-60 text-center">
                    <div className="single-team-style-2-img">
                        <img src={img} alt="" />
                        <div className="team-social-style-2">
                            <a href={fbLink}><FaFacebookF /></a>
                            <a href={twitterLink}><FaTwitter /></a>
                            <a href={instagramLink}><FaInstagram /></a>
                            <a href={pinterestLink}><FaPinterestP /></a>
                        </div>
                    </div>
                    <div className="single-team-content-style-2">
                        <h4>{name}</h4>
                        <span>{position}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

const TeamStyleFour = () => {
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
                        {TeamStyleFourData.map((data) => (
                            <TeamStyleFourItem
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

export default TeamStyleFour;