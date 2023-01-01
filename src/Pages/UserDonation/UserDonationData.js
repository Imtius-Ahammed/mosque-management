import React from 'react';

const UserDonationData = ({donate ,i}) => {
  return (
    
        
        <tr  key={donate._id} class="table">




<td>
    <p>{donate.name}</p>


</td>
<td>{donate.telEmail}</td>
<td>{donate.amount}</td>
<td>{donate.postCode}</td>
<td>{donate.paidAt}</td>



</tr>
   
  );
};

export default UserDonationData;