import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import "../../Pages/Dashboard/Info.css"
const Info = () => {
    const [user] = useAuthState(auth);
    console.log(user)

    return (
        // <div className="form-control w-full md:w-9/12 mx-auto bg-base-100 p-5">
        //     <div>
        //         <label className="label">
        //             <span className="label-text-alt text-xl">Name</span>
        //         </label>
        //         <input
        //             type="text"
        //             value={user ? user?.displayName : "type your Name"}
        //             className="input input-bordered w-full "
        //             disabled
        //         />
        //     </div>


        //     <div>
        //         <label className="label">
        //             <span className="label-text-alt text-xl">Email</span>
        //         </label>
        //         <input
        //             type="email"
        //             value={user ? user?.email : "xxxxxxxx@example.com"}
        //             className="input input-bordered w-full "
        //             disabled
        //         />
        //     </div>
        //     <div>
        //         <label className="label">
        //             <span className="label-text-alt text-xl">Profile Image</span>
        //         </label>
        //         <div className="w-full flex flex-col md:w-6/12 mx-auto">
        //             <img src={user?.photoURL} alt="Profile pic" />
        //             <button disabled className="btn text-white text-xl">
        //                 Change Photo
        //             </button>
        //         </div>
        //         <hr className="mt-5 h-0.5 bg-neutral" />
        //     </div>
        // </div>

        <div class="container profilebody">
            <div class="userbody">




                <div class="row gutters-sm">
                    <div class="col-md-4 mb-3">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex flex-column align-items-center text-center">
                                    <img src={user?.photoURL || "https://bootdey.com/img/Content/avatar/avatar7.png"} alt="Admin" class="rounded-circle" width="150" />
                                    {/* <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150" /> */}
                                    <div class="mt-3">
                                        <h4> {user ? user?.displayName : "name"}</h4>

                                        <button class="btn btn-primary">Follow</button>
                                        <button class="btn btn-outline-primary">Message</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="col-md-8">
                        <div class="card mb-3">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Full Name</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        {user ? user?.displayName : "name"}
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Email</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        {user ? user?.email : "xxxxxxxx@example.com"}
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Phone</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        (239) 816-9029
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Mobile</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        (320) 380-4539
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Address</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        Bay Area, San Francisco, CA
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-sm-12">
                                    <Link to={`/dashboard/updateProfile/${user?.email}`}>Edit</Link>
                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>
                </div>

            </div>
        </div>
    );
};

export default Info;