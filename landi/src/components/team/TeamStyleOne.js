import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import TeamStyleOneImg1 from '../../assets/images/team/1.png';
import TeamStyleOneImg2 from '../../assets/images/team/2.png';
import TeamStyleOneImg3 from '../../assets/images/team/3.png';

const HomeTeamTwoData = [
    {
        id: uuidv4(),
        img: TeamStyleOneImg1,
        name: 'Nicolas Murkari',
        position: 'Gardener',
        fbLink: '/',
        twitterLink: '/',
        instagramLink: '/',
        pinterestLink: '/',
    },

    {
        id: uuidv4(),
        img: TeamStyleOneImg2,
        name: 'Meri Sheraia',
        position: 'Gardener',
        fbLink: '/',
        twitterLink: '/',
        instagramLink: '/',
        pinterestLink: '/',
    },

    {
        id: uuidv4(),
        img: TeamStyleOneImg3,
        name: 'Nicolas Murkari',
        position: 'Gardener',
        fbLink: '/',
        twitterLink: '/',
        instagramLink: '/',
        pinterestLink: '/',
    },

];

const TeamStyleOneItem = ({ img, name, position, fbLink, twitterLink, instagramLink, pinterestLink }) => {
    return (
        <>
            <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="single-team-style-1 text-center">
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
                    <span>{position}</span>
                </div>
            </div>
        </>
    )
}

const TeamStyleOne = () => {
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
                        {HomeTeamTwoData.map((data) => (
                            <TeamStyleOneItem
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
                </div>
            </div>
        </>
    )
}

export default TeamStyleOne;