import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import axios from "axios";

function EditUser() {
  const { id } = useParams();
  const [userData, setUserData] = useState();
  const [user, setUser] = useState({
    firstName: "",
    email: "",
    phone: "",
    userId: "",
  });
  useEffect(() => {
    if (!id) {
      window.location.href = "/";
    }
  }, []);
  useEffect(() => {
    if (!id) return;
    getUserData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, email, phone } = user;

    const updatedUser = {
      firstName: firstName || userData.firstName,
      email: email || userData.email,
      phone: phone || userData.phone,
    };

    try {
      await axios.put(`/api/user/edit/${id}`, updatedUser);
      window.location.href = "/";
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "firstName") {
      setUser({ ...user, firstName: value });
    } else if (name === "email") {
      setUser({ ...user, email: value });
    } else if (name === "phone") {
      setUser({ ...user, phone: value });
    }
  };

  async function getUserData() {
    try {
      const response = await axios.get(`/api/user/${id}`);
      const data = await response.data;
      const { firstName, email, phone } = data;
      setUserData({
        firstName,
        email,
        phone,
      });
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <div>
        <h2>Edit User</h2>
        {userData && (
          <div>
            <form className="row" onSubmit={handleSubmit}>
              <div className="col-sm-6 offset-3">
                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">
                    Name
                  </label>
                  <input
                    defaultValue={userData.firstName}
                    onChange={handleChange}
                    type="text"
                    name="firstName"
                    id="firstName"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    defaultValue={userData.email}
                    onChange={handleChange}
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    defaultValue={userData.phone}
                    onChange={handleChange}
                    type="text"
                    name="phone"
                    id="phone"
                    className="form-control"
                    placeholder="Your Phone Number"
                  />
                </div>
                <input
                  type="submit"
                  className="btn btn-success"
                  value="Save User"
                />
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
}

export default EditUser;
