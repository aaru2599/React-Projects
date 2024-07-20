import React, { useState } from "react";

const Todo = () => {
  const initialState = {
    name: "",
    title: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [users, setUsers] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const editedData = users.map((user, index) =>
        index === editIndex ? formData : user
      );
      setUsers(editedData);
      setEditIndex(null);
    } else {
      setUsers((prev) => [...prev, formData]);
    }
    setFormData(initialState);
  };
  const handleSort = () => {
    setUsers([...users].sort((a, b) => a.name.localeCompare(b.name)));
  };
  const handleEditUser = (id) => {
    setEditIndex(id);
    setFormData(users[id]);
    // console.log("formData",formData);
  };
  return (
    <div>
      <div>Todo</div>
      <form onSubmit={handleFormSubmit}>
        Name:{" "}
        <input
          type="text"
          name="name"
          className="border"
          value={formData.name}
          onChange={handleChange}
        />
        Title:
        <input
          type="text"
          name="title"
          className="border"
          value={formData.title}
          onChange={handleChange}
        />
        <button className="border" type="submit">
          Submit
        </button>
      </form>
      <div>
        {users.map((user, index) => (
          <div key={index} className="flex">
            <div>
              <div>{user.name}</div>
              <div>{user.title}</div>
            </div>
            <button onClick={() => handleEditUser(index)}>Edit</button>
          </div>
        ))}
      </div>
      <button onClick={() => handleSort()}>SOrt</button>
    </div>
  );
};

export default Todo;
