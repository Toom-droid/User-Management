import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function UsersList() {
  const [users, setUsers] = useState([{}]);

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios
      .get("/api/user")
      .then((res) => {
        const userData = res.data.map(({ firstName, email, phone, _id }) => ({
          firstName,
          email,
          phone,
          _id,
        }));

        setUsers([...users, ...userData]);
      })
      .catch((err) => console.error(err));
  }

  const handleDelete = (userId) => {
    axios
      .delete(`/api/user/delete/${userId}`)
      .catch((err) => console.error(err));

    window.location.reload();
  };

  return (
    <div>
      <h2>Users List</h2>
      {users.length > 1 ? (
        users.map(({ firstName, email, phone, _id }, i) => (
          <div key={i}>
            <h4>{firstName}</h4>
            <p>{email}</p>
            <p>{phone}</p>

            {_id && (
              <div>
                <button
                  onClick={() => {
                    handleDelete(_id);
                  }}
                >
                  Delete User
                </button>
                <Link to={`/user/${_id}`}>
                  <button>View User</button>
                </Link>

                <Link to={`/edit/${_id}`}>
                  <button>Edit User</button>
                </Link>
              </div>
            )}
          </div>
        ))
      ) : (
        <p>No Users</p>
      )}
    </div>
  );
}

export default UsersList;
