import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ModifyTable = ({experts,i,handleDeleteExpert}) => {
  const { _id, phone, name,role } = experts;
  const { id } = useParams();
  const navigate = useNavigate();
  // const handlenavigateToHelpDetails = id => {
  //     navigate(`/experts/${id}`)
  // }
  const handlenavigateToupdate = id => {
      navigate(`/dashboard/experts/${id}`)
  }

  
  return (
    
      <tr  key={experts._id} class="table">



<th scope="row">{i + 1}</th>
<td>
    <p>{name}</p>


</td>
<td>{phone}</td>
<td>{role}</td>
<td><button onClick={() => handlenavigateToupdate(experts._id)}  className='btn btn-success'>Update</button></td>
<td><button className='btn btn-warning' onClick={() => handleDeleteExpert(experts)}>Delete</button></td>



</tr>
    
  );
};

export default ModifyTable;