import React from "react";

const Nav = props => {
  return (
    <nav className="main-nav">
    <ul>
      <li>
        <a href="#" onClick={() => props.getImages("cat")}>
          Cats
        </a>
      </li>
      <li>
        <a href="#" onClick={() => props.getImages("dog")}>
          Dogs
        </a>
      </li>
      <li>
        <a href="#" onClick={() => props.getImages("computer")}>
          Computers
        </a>
      </li>
    </ul>
  </nav>
  );
};

export default Nav;