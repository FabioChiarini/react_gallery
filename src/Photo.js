import React, { Component } from "react";

const Photo = props => {
  return (
    <li>
      <img src={props.image} alt="" />
    </li>
  );
};

export default Photo;
