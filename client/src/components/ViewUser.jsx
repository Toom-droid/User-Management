import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

function ViewUser() {
  const [userView, setUserView] = useState();
  const { id } = useParams();
  if (id) {
    getUser(id);
  } else if (!id) {
    window.location.href = "/";
  }

  async function getUser(userId) {
    try {
      const response = await axios.get(`/api/user/${userId}`);
      const data = await response.data;
      if (data) {
        const { _id, firstName, email, phone } = data;
        setUserView({
          _id,
          firstName,
          email,
          phone,
        });
      }
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div>
      {userView &&
      <div>
        <h1>{userView.firstName}</h1>
        <p>{userView.email}</p>
        <p>{userView.phone}</p>
        <p>User ID: {userView._id}</p>
      </div>
      }
    </div>
  );
}

export default ViewUser;
