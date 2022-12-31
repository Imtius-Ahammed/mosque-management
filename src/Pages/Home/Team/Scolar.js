
import { faFacebook, faGoogle, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';


const Scolar = () => {
  const [allScolar, setScolar] = useState([])
  useEffect(() => {
      fetch('http://localhost:5000/experts/scolar')
          .then(res => res.json())
          .then(data => setScolar(data))
  }, [])
 
    

    
    return (
      <div>
        	<section class="container pt-5 pb-5 ">



<div class="text-center">
  <h5 class="main_heading">Our Scolars</h5>
</div>

<div class="d-flex justify-content-center mt-4">
  <div class="heading_line"></div>
</div>
<p class="text-center help_section_body_text mt-3">
  Highly Qualified Team Supervises psum dolor sit amet, consectetur adipisicing elit, sed do <br></br> eiusmod
  tempor incididunt ut labore et dolore magna aliqua.
</p>




<div class="row mt-5 d-flex justify-content-center text-center poppins mb-2">




{
          allScolar.map(scolar=><div key={scolar._id} class="col-12 col-md-6 col-lg-3 col-xl-3 d-flex justify-content-center mt-3 mt-md-3 mt-lg-0 mt-xl-0">

          <div class="col-12 card_shadow pt-5 pb-5 ps-3 pe-3 team_card">
              <div class="team_section_img_container ">
                  <div class="d-flex justify-content-center">
                      <div class="team_section_img p-2 rounded-circle ">
                          <img src={scolar.img} class="rounded-circle" alt='' />
                      </div>
                  </div>
              </div>

              
              <h5 class="team_heading mt-4">{scolar.name}</h5>
              
              <p class="team_body mt-3 about-scholar"  >
                  {scolar.short_description}
              </p>
              <a href={scolar.facebook} class="service_read_more_btn p-2 m-1 social_media_icon rounded-circle">

                  <FontAwesomeIcon icon={faFacebook} className="icon" />

                  

              </a>

              <a href={scolar.twitter} class="service_read_more_btn p-2 m-1 social_media_icon rounded-circle">

                  <FontAwesomeIcon icon={faTwitter} className="icon" />
              </a>
              <a href={scolar.instagram} class="service_read_more_btn p-2 m-1 social_media_icon rounded-circle">
                  <FontAwesomeIcon icon={faInstagram} className="icon" />
              </a>
              <a href={scolar.google} class="service_read_more_btn p-2 m-1 social_media_icon rounded-circle">
                  <FontAwesomeIcon icon={faGoogle} className="icon" />
              </a>
            
          </div>
        

      </div>)
        }



</div>

</section>
      </div>
      
      
      
    );
};

export default Scolar;