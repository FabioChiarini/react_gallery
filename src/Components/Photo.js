import React from "react";

//this component is used to display a single image
const Photo = props => {
  return (
    <li>
      <img src={props.image} alt="" />
    </li>
  );
};

export default Photo;
