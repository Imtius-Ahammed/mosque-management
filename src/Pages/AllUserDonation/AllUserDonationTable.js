import React from 'react';

const AllUserDonationTable = ({donation ,i}) => {
  return (
    
        
        <tr   key={donation._id} class="table">




<td>
    <p>{i+1}</p>


</td>

<td>
    <p>{donation.name}</p>


</td>
<td>{donation.telEmail}</td>
<td>{donation.amount}</td>
<td>{donation.postCode}</td>
<td>{donation.paidAt}</td>



</tr>
   
  );
};

export default AllUserDonationTable;