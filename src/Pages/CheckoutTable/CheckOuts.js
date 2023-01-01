import React, { useContext, useEffect, useState } from 'react';
import auth from '../../firebase.init';

const CheckOuts = () => {
  const { user, logOut } = useContext(auth);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(
      `http://localhost:5000/checkouts?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => {
        setOrders(data);
      });
  }, [user?.email, logOut]);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are You sure, you want to cancel this order"
    );
    if (proceed) {
      fetch(`http://localhost:5000/checkouts?email/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted successfully");
            const remaining = orders.filter((ord) => ord._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  // const handleStatusUpdate = (id) => {
  //   fetch(`https://genius-car-server-ruddy.vercel.app/orders/${id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "content-type": "application/json",
  //       authorization: `Bearer ${localStorage.getItem("genius-token")}`,
  //     },
  //     body: JSON.stringify({ status: "Approved" }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       if (data.modifiedCount > 0) {
  //         const remaining = orders.filter((odr) => odr._id !== id);
  //         const approving = orders.find((odr) => odr._id === id);
  //         approving.status = "Approved";

  //         const newOrders = [approving, ...remaining];
  //         setOrders(newOrders);
  //       }
  //     });
  // };
  return (
    <div>
      
    </div>
  );
};

export default CheckOuts;