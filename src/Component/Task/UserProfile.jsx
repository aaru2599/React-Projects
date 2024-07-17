import axios from "axios";
import React, { useEffect, useState } from "react";
import "./FormCss.css";
import { useAuth0 } from "@auth0/auth0-react";

const UserProfile = () => {
  const { isLoading, logout, user, loginWithRedirect, isAuthenticated } =
    useAuth0();
  console.log("loading ", isLoading);

  const [users, setUsers] = useState([]);
  const [openForm, setOpenForm] = useState(false);
  const [editForm, setEditForm] = useState({});
  const apiCall = async (url) => {
    try {
      const responce = await axios.get(url);
      setUsers(responce.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    apiCall("https://jsonplaceholder.typicode.com/users");
  }, []);
  const handleUserEdit = (id) => {
    const editTo = users.find((user) => user.id === id);
    setEditForm(editTo);
    setOpenForm(true);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setUsers((prevUser) =>
      prevUser.map((user) =>
        user.id === editForm.id ? { ...user, ...editForm } : user
      )
    );
    setOpenForm(false);
    alert("data updated");
  };
  const handleFormChange = (e) => {
    const { name, value } = e.target;

    setEditForm({ ...editForm, [name]: value });
  };
  console.log("editForm", editForm);
  console.log("isAuthenticated", isAuthenticated);
  console.log("users", users);
  return (
    <div>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        isAuthenticated && <h2>Hello {user.name}</h2>
      )}
      {isAuthenticated  ? (
        <button onClick={() => logout()}>Logout</button>
      ) : (
        <button onClick={() => loginWithRedirect()}>Login</button>
      )}

      <div className="font-semibold text-center">UserProfile</div>
      {openForm ? (
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              value={editForm.name}
              name="name"
              onChange={handleFormChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>

            <input
              type="email"
              name="email"
              value={editForm.email}
              onChange={handleFormChange}
            />
          </div>
          <div>
            <label htmlFor="Phone">Phone:</label>
            <input
              type="text"
              name="phone"
              value={editForm.phone}
              onChange={handleFormChange}
            />
          </div>
          <button type="submit">Submit</button>
          <button onClick={() => setOpenForm(false)}>Cancel</button>
        </form>
      ) : (
        <div className="flex flex-col gap-2 ">
          {users.map((user) => {
            return (
              <div key={user.id} className="flex  ">
                <div
                  className={`border  w-[300px]  ${user.id % 2 === 0 ? "bg-slate-200" : "bg-rose-200"} `}
                >
                  <div>User Name: {user.name}</div>
                  <div>Email: {user.email}</div>
                  <div>Phone No:{user.phone}</div>
                </div>
                <button onClick={() => handleUserEdit(user.id)}>Edit</button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default UserProfile;
