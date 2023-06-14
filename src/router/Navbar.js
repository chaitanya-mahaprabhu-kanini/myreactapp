import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = (props) => {
  return (
    <nav>
      <ul>
        <li>
          <Link className ="active" to="">
            Read
          </Link>
        </li>
        <li>
          <Link to="/readid">Read by ID</Link>
        </li>
        <li>
          <Link to="/update">Update</Link>
        </li>
        <li>
        <Link to="/delete">Delete</Link>
        </li>
        <li>
        <Link to="/insert">Insert</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
