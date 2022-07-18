import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import AboutUs from "../Pages/AboutUs";
// import House from "../Pages/House";
// import Staffs from "../Pages/Staffs";
// import Students from "../Pages/Students";
import "./index.css";

export const Nav = () => {
  return (
    <nav>
      <div>
        {/* <BrowserRouter> */}
        <Link to="/AboutUs">About Us</Link>
        <Link to="/House">House</Link>
        <Link to="/Staffs">Staffs</Link>
        <Link to="/Students">Students</Link>
        {/* </BrowserRouter> */}
      </div>
    </nav>
  );
};

export default Nav;
