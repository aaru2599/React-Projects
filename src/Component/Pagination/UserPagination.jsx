import axios from "axios";
import React, { useEffect, useState } from "react";

const UserPagination = () => {
  const [users, setUsers] = useState([]);
  //   const [totalUsers, setTotalUser] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const usersPerPage = 30;
  const apiCall = async (page) => {
    const skip = (page - 1) * usersPerPage;
    try {
      const responce = await axios.get(
        `https://dummyjson.com/users?limit=${usersPerPage}&skip=${skip}`
      );
      setUsers(responce.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    apiCall(currentPage);
  }, [currentPage]);
  console.log("users", users.users);
  const numbers = Math.floor(users.total / usersPerPage);
  return (
    <div>
      <div>UserPagination</div>
      {users.users &&
        users.users.map((item) => {
          return <div key={item.id}>{item.firstName}</div>;
        })}
      {Array.from({ length: numbers }, (_, i) => i).map((item) => (
        <button key={item} onClick={() => setCurrentPage(item + 1)}>
          {item + 1}
        </button>
      ))}
    </div>
  );
};

export default UserPagination;
