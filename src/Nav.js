import React from "react";
import { Link } from "react-router-dom";

const Nav = props => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <Link to="/cats" onClick={() => props.getImages("cat")}>
            Cats
          </Link>
        </li>
        <li>
          <Link to="/dogs" onClick={() => props.getImages("dog")}>
            Dogs
          </Link>
        </li>
        <li>
          <Link to="/computers" onClick={() => props.getImages("computer")}>
            Computers
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
