import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateExpert = () => {
  const [UpdateExpert, setUpdateExpert] = useState({});

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/expertSingle/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setUpdateExpert(result);
        console.log(result);
      });
  }, [id]);

  const handleUpdateExpert = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const short_description = form.short_description.value;
    const facebook = form.facebook.value;
    const twitter = form.twitter.value;
    const google = form.google.value;
    const img = form.img.value;
    const phone = form.phone.value;
    const role = form.role.value;
    const instagram = form.instagram.value;

    const expertDetails = {
      name,
      facebook,
      role,
      twitter,
      google,
      short_description,
      img,
      instagram,
      phone,
    };
    fetch(`http://localhost:5000/experts/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(expertDetails),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        // reset();
        toast.success("Expert Update Successfully");
      });
  };

  return (
    <>
      <section className="content-main " style={{ maxWidth: "1200px" }}>
        <form onSubmit={handleUpdateExpert}>
          <div className="content-header">
            {/* <Link to="" className="btn btn-danger text-white">
        Go to products
      </Link> */}
            <button className="btn btn-danger text-white">Go to Scolar</button>
            <h2 className="content-title">Add Scolar</h2>
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
                      Select Role
                    </label>
                    <select
                      name="role"
                      // defaultValue={updateItem.role}
                      className="form-control"
                      id="exampleFormControlInput1"
                      required
                    >
                      <option >imam</option>
                      <option>muyajjem</option>
                      <option>khatib</option>
                      <option>khadem</option>
                      <option>scolar</option>
                      <option>chairman</option>
                      <option>viceChairman</option>
                      <option>secretaryGeneral</option>
                      <option>member</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="product_title"
                      for="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      Expert Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      defaultValue={UpdateExpert?.name}
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Add your Campaign Name "
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      for="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      Expert Details
                    </label>
                    <textarea
                      maxlength="600"
                      type="text"
                      defaultValue={UpdateExpert?.short_description}
                      name="short_description"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Jummah Khutba About Crisis"
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
                      defaultValue={UpdateExpert?.phone}
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
                      defaultValue={UpdateExpert?.facebook}
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
                      Twitter
                    </label>
                    <input
                      type="text"
                      name="twitter"
                      defaultValue={UpdateExpert?.twitter}
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Add Twitter Link"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      for="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      Instagram
                    </label>
                    <input
                      type="text"
                      name="instagram"
                      defaultValue={UpdateExpert?.instagram}
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Add Instagram Link"
                     
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      for="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      Google
                    </label>
                    <input
                      type="text"
                      name="google"
                      defaultValue={UpdateExpert?.google}
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Add Google Link"
                     
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      for="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      Expert Photo
                    </label>
                    <input
                      // type="link"
                      type="text"
                      name="img"
                      defaultValue={UpdateExpert?.img}
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="link.mp3"
                     
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Publish now
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default UpdateExpert;
