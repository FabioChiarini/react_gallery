import React from "react";
import { Link } from "react-router-dom";

const Nav = props => {
  console.log(props);
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <Link to="/search/cat" onClick={() => props.getImages("cat")}>
            Cat
          </Link>
        </li>
        <li>
          <Link to="/search/dog" onClick={() => props.getImages("dog")}>
            Dog
          </Link>
        </li>
        <li>
          <Link
            to="/search/computer"
            onClick={() => props.getImages("computer")}
          >
            Computer
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
