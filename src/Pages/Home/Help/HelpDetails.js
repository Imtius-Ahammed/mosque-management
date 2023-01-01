import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import helpbanner from "../../../../src/1_images/8_donate_page/1_donate_home.jpg";
import linee from "../../../1_images/1_home/1_line.png";
import auth from "../../../firebase.init";
const HelpDetails = () => {
  const [user]=useAuthState(auth);
  const { id } = useParams();

  const [cause, setCauses] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/campaign/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCauses(data));
  }, [id]);

  const { _id, img, name, Raised, Goal, short_description } = cause;

  const navigate = useNavigate();
  const {
    register,
    handleSubmitt,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const postCode = event.target.postCode.value;
    const amount = event.target.amount.value;
    const currency = event.target.currency.value;
    const telEmail = event.target.telEmail.value;
    const datas = {
      amount,
      name: name,
      telEmail: telEmail,
      postCode,
      currency,
    };
    fetch("http://localhost:5000/checkout", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(datas),
    })
      .then((res) => res.json())
      .then((result) => {
        window.location.replace(result.url);
        // const insertedId = result.insertedId;
        // navigate(`/payment/${insertedId}`);
      });
    console.log(datas);
  };
  return (
    <div className="body">
      <div
        className="home_banner"
        style={{
          background: `url(${helpbanner}) `,
        }}
        class="pb-5"
      >
        <h5 class="poppins text-center charity_campaing_heading pt-5 mt-">
          Our Causes
        </h5>

        <div class="text-center pb-3">
          <img src={linee} alt="" />
        </div>

        <div class="text-center when_things">
          <p class="poppins donate_home_icon">
            <Link to="/">Home</Link> /{" "}
            <span class="charity-text">Our Causes</span>
          </p>
        </div>
      </div>

      <div className="container my-4">
        <div className="row">
          <div className="col-lg-6">
            <img
              className="my-4 shadow-sm rounded img-fluid"
              src={img}
              alt=""
            />
            <div className="bg-white rounded p-4 text-start">
              <h5>
                <b>{name}</b>
              </h5>
              <p>{short_description}</p>
            </div>
            <div class="row ps-2 pe-3 pt-3 raised bg-white my-2 m-0 rounded">
              <p class="col-6 text-start">
                {" "}
                <b>Raised: </b>
                <span style={{ color: "#D1AD3C" }}>{Raised} </span>{" "}
              </p>

              <p class="col-6 text-end">
                <b> Goal: </b>
                <span style={{ color: "#D1AD3C" }}>{Goal} </span>{" "}
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="bg-white rounded p-4 lg-m-4 text-start">
              <h5>
                <b>আস-সুন্নাহ ফাউন্ডেশন মসজিদ কমপ্লেক্স</b>
              </h5>
              <p className="py-2">
                দেশ, জাতি ও উম্মাহর কল্যাণার্থে পরিচালিত আস-সুন্নাহ ফাউন্ডেশনের
                নানামুখী কার্যক্রমের কেন্দ্রবিন্দু হবে আস-সুন্নাহ ফাউন্ডেশন
                মসজিদ কমপ্লেক্স। এই কমপ্লেক্সে একটি আদর্শ মসজিদ এবং যুগ-চাহিদা
                পূরণে উপযোগী ইসলামিক স্কলার তৈরির লক্ষ্যে সমন্বিত সিলেবাসের একটি
                আধুনিক মাদরাসাসহ বিভন্ন সেবা ও জনকল্যাণমূলক প্রকল্প পরিচালনার
                কেন্দ্র হবে ইন-শা-আল্লাহ।
              </p>
              <p className="py-2">
                এটি একটি সাদকায়ে জারিয়াহমূলক প্রকল্প, যার সাওয়াব মৃত্যুর পরও
                আমলনামায় যুক্ত হতে থাকবে ইন-শা-আল্লাহ{" "}
              </p>
              <a className="text-decoration-none" href="#">
                <b>যা থাকছে আস-সুন্নাহ ফাউন্ডেশন মসজিদ কমপ্লেক্সে</b>
              </a>
              <p>
                <b>অ্যাকাউন্টের নাম :</b> As sunnah Foundation <br />
                <b>অ্যাকাউন্ট নম্বর :</b> 20503100201496517 <br />
                <b>ব্যাংক :</b> Islami Bank Bangladesh ltd <br />
                <b>শাখা :</b> Badda, Dhaka. <br />
                <b>রাউটিং নাম্বার :</b> 125260341 <br />
                <b>সুইফট কোড :</b> IBBLBDDH
              </p>
              <br />
              <form
                onSubmit={handleSubmit}
                className="d-flex flex-column mx-3 shadow p-3 rounded"
              >
                <select name="currency" id="cars">
                  <option defaultValue="BDT" value="BDT">
                    BDT
                  </option>
                  <option value="USD">USD</option>
                </select>
                <label className="text-left ">
                  <h5>Grant amount *</h5>
                </label>
                <input
                  {...register("amount")}
                  name="amount"
                  type="number"
                  required
                  className="mb-2 "
                  placeholder="Grant amount"
                />
                <label className="text-left ">
                  <h5>Name *</h5>
                </label>
                <input
                  {...register("name")}
                  name="name"
                  type="text"
                  required
                  readOnly
                  className="mb-2 "
                  defaultValue={user?.displayName}
                  placeholder="Your Name"
                />
                <label className="text-left ">
                  <h5>Telephone or Email *</h5>
                </label>
                <input
                  {...register("telEmail")}
                  name="telEmail"
                  type="text"
                  required
                  readOnly
                  className="mb-2 "
                  defaultValue={user?.email}
                  placeholder="Telephone or Email"
                />
                <label className="text-left ">
                  <h5>Post Code</h5>
                </label>
                <input
                  {...register("postCode")}
                  name="postCode"
                  type="text"
                  required
                  className="mb-2 "
                  placeholder="post code"
                />

                <input
                  className="mt-2 btn btn-dark"
                  type="submit"
                  value="Pay"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpDetails;
