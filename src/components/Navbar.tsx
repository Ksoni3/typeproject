import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={"/data"}>Home</Link>
        </li>
        <li>
          <Link to={"/data"}>Contact</Link>
        </li>
        <li>
          <Link to={"/data"}>About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
