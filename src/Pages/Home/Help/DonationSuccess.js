import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const DonationSuccess = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const transactionId = query.get("transactionId");
  console.log(transactionId)

  const [donation, setDonation] = useState({});
  useEffect(()=>{
    fetch(`http://localhost:5000/donation-info/by-transaction-id/${transactionId}`)
    .then(res=>res.json())
    .then(data=>setDonation(data));
  },[transactionId])
  console.log(donation)

  return (
    <div>
      <h2>Congrats! Successfully Donated.</h2>
     <h2>Your Order Summary</h2>
     <div>
                    <table className=' mx-auto table table-striped shadow m-4 p-4'>
                        <thead>
                            <tr className='bg-dark text-white'>
                                
                                
                                <th scope="col">Name</th>
                                <th scope="col">TransactionID</th>
                             
                                <th scope="col">postCode</th>
                                <th scope="col">Status</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                        <tr class="table">




<td>
    <p>{donation.name}</p>
    <h6>{donation.telEmail}</h6>


</td>
<td>{donation._id}</td>

<td>{donation.postCode}</td>
<td>{donation.paidAt}</td>





</tr>
                           
                        </tbody>
                    </table>
                    <button className='btn btn-primary' onClick={()=>window.print()}>Print</button>
                </div>
        
    </div>
  );
};

export default DonationSuccess;