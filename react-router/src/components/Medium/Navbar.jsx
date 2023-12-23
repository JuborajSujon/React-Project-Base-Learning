import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <ul className="navbar">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contacts</NavLink>
      </li>
    </ul>
  );
}

export default Navbar;
