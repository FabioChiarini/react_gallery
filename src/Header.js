import React from "react";
import Nav from "./Nav";
import SearchForm from "./SearchForm";

const Header = props => {
  return (
    <div>
      {/* Adding Search form component to the page and passing the 
        getImage function as a prop, so that it can be used 
        in the SearchForm component */}
      <SearchForm getImages={props.getImages} />
      {/* Adding the Nav components with his anchor tags */}
      <Nav getImages={props.getImages} />
    </div>
  );
};

export default Header;
