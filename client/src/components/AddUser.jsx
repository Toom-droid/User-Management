import { useState } from "react";
import uniquid from "uniqid";
import axios from "axios";

function AddUser() {
  const [user, setUser] = useState({
    firstName: "",
    email: "",
    phone: "",
    userId: "",
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ ...user, userId: uniquid() });

    axios.post("/api/user/add", user).catch((err) => console.error(err));

    window.location.href = "/";
  };

  return (
    <div className="container">
      <div className="row">
        <h2 className="mt-4">Add User</h2>
      </div>

      <form className="row" onSubmit={handleSubmit}>
        <div className="col-sm-6 offset-3">
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              Name
            </label>
            <input
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
              onChange={handleChange}
              type="text"
              name="phone"
              id="phone"
              className="form-control"
              placeholder="Your Phone Number"
            />
          </div>
          <input type="submit" className="btn btn-success" value="Save User" />
        </div>
      </form>
    </div>
  );
}

export default AddUser;
