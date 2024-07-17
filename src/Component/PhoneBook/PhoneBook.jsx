import axios from "axios";
import React, { useEffect, useState } from "react";
import './PhoneBook.css'
const PhoneBook = () => {
  const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllUse();
  }, []);

  const fetchAllUse = async () => {
    const allUsers = [];
    const limit = 30;
    let skip = 0;
    let totalUsers = 0;
    try {
      const startResponce = await axios.get(
        `https://dummyjson.com/users?limit=${limit}&skip=${skip}`
      );
      const firstUsers = startResponce.data;
      console.log(firstUsers);
      totalUsers = firstUsers.total;
      allUsers.push(...firstUsers.users);

      while (allUsers.length < totalUsers) {
        skip = skip + limit;
        const responce = await axios.get(
          `https://dummyjson.com/users?limit=${limit}&skip=${skip}`
        );
        const data = responce.data.users;
        allUsers.push(...data);
      }
      allUsers.sort((a, b) => a.firstName.localeCompare(b.firstName));
      setUsers(allUsers);
    } catch (err) {
      console.log(err);
    }
  };

  const groupUser = users.reduce((acc, curr) => {
    const key = curr.firstName[0].toUpperCase();
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(curr);
    return acc;
  }, {});
  

  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  console.log("users", users);
  return (
    <div>
     {
      Object.keys(groupUser).map((alfa,index)=>{
        return <div key={index}>
          <div className="sticky-header ">{alfa}</div>
          {
            groupUser[alfa].map((user)=>{
              return <div key={user.id}>{user.firstName}</div>
            })
          }
        </div>
      })
     }
    </div>
  );
};

export default PhoneBook;
