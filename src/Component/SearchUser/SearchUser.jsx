import React, { useEffect, useRef, useState } from "react";
import "./Search.css";
import Pill from "./Pill/Pill";
const SearchUser = () => {
  const [searchInput, setSearchINput] = useState("");
  const [suggestions, setsuggestions] = useState([]);
  const [selectedUser, setselectedUser] = useState([]);
  const [selectedUSerSet, setselectedUSerSet] = useState(new Set());

  useEffect(() => {
    fetchUser();
  }, [searchInput]);
  const inputRef = useRef("");

  const handleSelectUser = (user) => {
    setselectedUser([...selectedUser, user]);
    setselectedUSerSet(new Set([...selectedUSerSet, user.email]));
    setSearchINput("");
    setsuggestions([]);
    inputRef.current.focus();
  };

  const handleRemoveUser = (user) => {
    const updatedUser = selectedUser.filter(
      (selectedUser) => selectedUser.id !== user.id
    );
    setselectedUser(updatedUser);
    inputRef.current.focus();
  };
  console.log("selectedUSerSet", selectedUSerSet);
  console.log("setselectedUser", selectedUser);
  const fetchUser = () => {
    if (searchInput.trim() === "") {
      setsuggestions([]);
      return;
    }
    fetch(`https://dummyjson.com/users/search?q=${searchInput}`)
      .then((res) => res.json())
      .then((data) => {
        setsuggestions(data);
        // console.log("data", data);
      });
  };
  //   console.log("suggestions",suggestions.users);
  return (
    <div>
      <div className="flex items-center relative border-2 w-[100%] flex-wrap">
        {selectedUser.map((user) => {
          return (
            <Pill
              key={user.email}
              image={user.image}
              text={`${user.firstName} ${user.lastName} `}
              onClick={() => handleRemoveUser(user)}
            />
          );
        })}
        <div className="pl-3">
          <input
            className="outline-0 "
            type="text"
            value={searchInput}
            ref={inputRef}
            placeholder="Search User..."
            onChange={(e) => setSearchINput(e.target.value)}
          />
          <ul
            style={{ maxHeight: "300px", position: "absolute", top: "40px" }}
            className="border overflow-y-scroll scrollbar flex flex-col gap-[5px]"
          >
            {suggestions?.users?.map((user) => {
              return !selectedUSerSet.has(user.email) ? (
                <li
                  key={user.email}
                  onClick={() => handleSelectUser(user)}
                  className="flex border-b-2 py-[8px] cursor-pointer hover:bg-slate-200 px-[10px] gap-5"
                >
                  <img
                    src={user.image}
                    height={30}
                    width={30}
                    alt={`${user.firstName} ${user.lastName}`}
                  />
                  <span>{`${user.firstName} ${user.lastName}`}</span>
                </li>
              ) : null;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchUser;
