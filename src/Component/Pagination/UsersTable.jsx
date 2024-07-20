import axios from "axios";
import React, { useEffect, useState } from "react";

const UsersTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [users, setUsers] = useState([]);
  // const [pageActive, setPageActive] = useState(1);
  const usersPerPage = 15;
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
  const totalPage = Math.floor(users.total / usersPerPage);
  console.log("totalPage", totalPage);
  console.log("users", users);
  return (
    <div>
      <div className="text-center font-semibold text-[25px]">UsersTable</div>
      <div className="w-[100%]">
        <table className="w-[100%]">
          <tr className="text-center sticky top-0 bg-white">
            <th>Image</th>

            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
          {users.users &&
            users?.users.map((user) => {
              return (
                <tr
                  key={user.id}
                  className={`text-center border-b p-2 ${user.id % 2 === 0 ? "bg-rose-200" : "bg-gray-200"}`}
                >
                  <td className={`flex justify-center p-2 `}>
                    <img
                      className="w-[25px] h-[25px] rounded-full"
                      loading="lazy"
                      src={user.image}
                      alt=""
                    />
                  </td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                </tr>
              );
            })}
        </table>
      </div>
      <div className="flex justify-center  gap-6   ">
        <button onClick={() => setCurrentPage(currentPage - 1)}>Prev</button>
        {Array.from({ length: totalPage }, (_, i) => i).map((index) => (
          <div
            onClick={() => setCurrentPage(index + 1)}
            key={index}
            className=" p-2"
          >
            <div
              className={`bg-slate-400  rounded-full flex items-center justify-center w-8 h-8 text-base cursor-pointer ${currentPage === index + 1 ? "bg-red-500" : ""}`}
            >
              {index + 1}
            </div>
          </div>
        ))}
        <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
      </div>
    </div>
  );
};

export default UsersTable;
