import React from "react";
import Photo from "./Photo";

//this component is used to display the 24 images
const PhotoContainer = props => {
  return (
    <div className="photo-container">
      <h2>{props.title}</h2>
      <ul>
        {/*display on the page the images obtained from the API
      formatting the URL as requested in the documentation*/}
        {props.searchedImages.map(photo => (
          <Photo
            image={
              "https://farm" +
              photo.farm +
              ".staticflickr.com/" +
              photo.server +
              "/" +
              photo.id +
              "_" +
              photo.secret +
              ".jpg"
            }
            key={photo.id.toString()}
          />
        ))}
      </ul>
      <ul>
        <li className="not-found">
          <h3>No Results Found</h3>
          <p>You search did not return any results. Please try again.</p>
        </li>
      </ul>
    </div>
  );
};

export default PhotoContainer;
