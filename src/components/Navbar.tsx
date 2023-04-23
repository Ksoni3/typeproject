import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar: React.FC = () => {
  return (
    <div className="container">
      <ul className="wrapper">
        <li>
          <Link className="links" to={"/data"}>
            Home
          </Link>
        </li>
        <li>
          <Link className="links" to={"/data"}>
            Contact
          </Link>
        </li>
        <li>
          <Link className="links" to={"/data"}>
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
