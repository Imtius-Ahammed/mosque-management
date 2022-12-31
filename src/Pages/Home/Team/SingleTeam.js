import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SingleTeam = ({ expert }) => {
    const { img, name, short_description, facebook, twitter, instagram, google,role } = expert;
    console.log(expert)
    const [experts, setExperts]=useState([])
    

    
    return (
        <div class="col-12 col-md-6 col-lg-3 col-xl-3 d-flex justify-content-center mt-3 mt-md-3 mt-lg-0 mt-xl-0">

            <div class="col-12 card_shadow pt-5 pb-5 ps-3 pe-3 team_card">
                <div class="team_section_img_container ">
                    <div class="d-flex justify-content-center">
                        <div class="team_section_img p-2 rounded-circle ">
                            <img src={img} class="rounded-circle" />
                        </div>
                    </div>
                </div>

                 <h2 class="mt-4">{role}</h2>
                <h5 class="team_heading mt-4">{name}</h5>
                <p class="team_body mt-3 about-scholar"  >
                    {short_description}
                </p>
                <a href={facebook} class="service_read_more_btn p-2 m-1 social_media_icon rounded-circle">

                    <FontAwesomeIcon icon={faFacebook} className="icon" />

                    {/* <FontAwesomeIcon icon={faFacebookF} className="icon" /> */}

                </a>

                <a href={twitter} class="service_read_more_btn p-2 m-1 social_media_icon rounded-circle">

                    <FontAwesomeIcon icon={faTwitter} className="icon" />
                </a>
                <a href={instagram} class="service_read_more_btn p-2 m-1 social_media_icon rounded-circle">
                    <FontAwesomeIcon icon={faInstagram} className="icon" />
                </a>
                <a href={google} class="service_read_more_btn p-2 m-1 social_media_icon rounded-circle">
                    <FontAwesomeIcon icon={faGoogle} className="icon" />
                </a>
              
            </div>
          

        </div>
    );
};

export default SingleTeam;