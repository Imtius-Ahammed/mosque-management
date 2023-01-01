import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import UserDonationData from './UserDonationData';



const UserDonation = () => {
const [user]= useAuthState(auth)
console.log(user)

  const[donation,setDonation]=useState([]);
  useEffect(()=>{
    fetch(`http://localhost:5000/checkout/${user?.email}/true`)
    .then(res => res.json())
    .then(data => setDonation(data))
    console.log(setDonation);
  },[user?.email])
  return (
    <div>
    
     <table className=' container mx-auto table table-striped shadow m-4 p-4'>
                        <thead>
                            <tr className='bg-dark text-white'>
                                
                                <th scope="col">Name</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Role</th>
                                <th scope="col">Update</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                        {donation.map(donate=><UserDonationData key={donate._id}  donate={donate}></UserDonationData>)}
                        </tbody>
                    </table>
    
     
    </div>
  );
};

export default UserDonation;