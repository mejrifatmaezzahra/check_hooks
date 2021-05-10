import React from "react";
import { Link } from 'react-router-dom';
import "../App.css";

const Navbar = () => {
  return (
      <header>
        <Link to='/home'> 
        <h1>
          Movie 
          <span style={{color: "#2E4053" }}> App</span>
        </h1>
        </Link>
        <ul className="navmenu">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </header>
  );
};

export default Navbar;