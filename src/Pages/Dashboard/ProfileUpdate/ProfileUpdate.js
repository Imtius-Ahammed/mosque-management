import React, {  useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';



const ProfileUpdate = () => {
  const [UpdateExpert, setUpdateExpert] = useState({});

  const { email } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/user/${email}`)
      .then((res) => res.json())
      .then((result) => {
        setUpdateExpert(result);
        console.log(result);
      });
  }, [email]);

  const handleUpdateProfile = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const short_description = form.short_description.value;
    const facebook = form.facebook.value;
  

    const img = form.img.value;
    const phone = form.phone.value;
    
    

    const profileDetails = {
      name,
      facebook,
      
     
      
      short_description,
      img,
    
      phone,
    };
    fetch(`http://localhost:5000/updateProfile/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(profileDetails),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        // reset();
        toast.success("Profile Update Successfully");
      });
  };
  return (
    
      <section className="content-main " style={{ maxWidth: "1200px" }}>
        <form onSubmit={handleUpdateProfile} >
          <div className="content-header">
            {/* <Link to="" className="btn btn-danger text-white">
        Go to products
      </Link> */}
            <button className="btn btn-danger text-white">Go to Home</button>
            <h2 className="content-title">Update Profile </h2>
            <div>
              <button type="submit" className="btn btn-primary">
                Publish now
              </button>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-xl-8 col-lg-8">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  
                  <div className="mb-4">
                    <label
                      htmlFor="product_title"
                      for="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      Profile Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      defaultValue={UpdateExpert?.displayName}
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Add profile name "
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      for="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      Profile Details
                    </label>
                    <textarea
                      maxlength="200"
                      type="text"
                      // defaultValue={UpdateExpert?.short_description}
                      name="short_description"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="about yourself"
                      rows="7"
                    ></textarea>
                  </div>
                  <div className="mb-4">
                    <label
                      for="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      Phone
                    </label>
                    <input
                      type="number"
                      name="phone"
                      // defaultValue={UpdateExpert?.phone}
                      className="form-control"
                      id="exampleFormControlInput1"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      for="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      Facebook
                    </label>
                    <input
                      type="text"
                      name="facebook"
                      // defaultValue={UpdateExpert?.facebook}
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Add Facebook Link"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      for="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      Profile Photo
                    </label>
                    <input
                      // type="link"
                      type="text"
                      name="img"
                      // defaultValue={UpdateExpert?.img}
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="link.mp3"
                     
                    />
                  </div>
                  
                  </div>
                
                
                
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Publish now
              </button>
            </div>
         
        </form>
      </section>
   
   
  );
};

export default ProfileUpdate;