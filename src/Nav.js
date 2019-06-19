import React from "react";
import { Link } from "react-router-dom";

const Nav = props => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <Link to="/cat" onClick={() => props.getImages("cat")}>
            Cat
          </Link>
        </li>
        <li>
          <Link to="/dog" onClick={() => props.getImages("dog")}>
            Dog
          </Link>
        </li>
        <li>
          <Link to="/computer" onClick={() => props.getImages("computer")}>
            Computer
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
