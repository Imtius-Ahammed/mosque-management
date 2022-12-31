import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading/Loading';
import onelinee from "../../../1_images/1_home/1_line.png"

import donatebanner from "../../../1_images/8_donate_page/1_donate_home.jpg";
import { Link } from 'react-router-dom';
import ModifyTable from './ModifyTable';

const ModifyExperts = () => {

    const {
        data: allExperts = [],
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["allExperts"],
        queryFn: async () => {
            try {
                const res = await fetch(
                    "http://localhost:5000/experts",
                    {
                        // headers: {
                        //     authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        // },
                    }
                );
                const data = await res.json();
                return data;
            } catch (error) { }
        },
    });





    const handleDeleteExpert = (expert) => {
        console.log(expert);

        fetch(
            `http://localhost:5000/experts/${expert._id}`,
            {
                method: "DELETE",
                // headers: {
                //   authorization: `Bearer ${localStorage.getItem('accessToken')}`
                // },
            }
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount > 0) {
                    refetch()
                    toast.success(`${expert.name} deleted successfully`);

                }

            });
    };
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div >
            <div className='home_banner'
                style={{
                    background: `url(${donatebanner}) `
                }}
                class="pb-5">

                <h5 class="poppins text-center charity_campaing_heading pt-5 mt-">ModifyExpert</h5>

                <div class="text-center pb-3">
                    <img src={onelinee} />
                </div>

                <div class="text-center when_things">
                    <p class="poppins donate_home_icon">
                        <a href="#">Home</a> / <span class="charity-text" >ModifyExpert</span>
                    </p>
                </div>

            </div>




            <div >
                <div>
                    <table className=' mx-auto table table-striped shadow m-4 p-4'>
                        <thead>
                            <tr className='bg-dark text-white'>
                                <th scope="col">SL.</th>
                                <th scope="col">Name</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Role</th>
                                <th scope="col">Update</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allExperts.map((experts, i) => <ModifyTable experts={experts} handleDeleteExpert={handleDeleteExpert} i={i}></ModifyTable>)
                            }
                        </tbody>
                    </table>
                </div>

            </div>


        </div>
    );
};

export default ModifyExperts;