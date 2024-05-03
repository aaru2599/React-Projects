import React from "react";
import { Link } from "react-router-dom";
// import { useTheme } from "./themeContext";

const Navbar = () => {
  // const theme = useTheme();
  // console.log(theme);
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Link to={"/home"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/contact"}>Contact</Link>
    </div>
  );
};

export default Navbar;
