import React, { Component } from "react";
import "./App.css";
import apiKey from "./config.js";
import "./index.css";
import Photo from "./Photo";

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchedImages: []
    };
  }

  getImages = tag => {
    fetch(
      "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=" +
        apiKey +
        "&tags=" +
        tag +
        "&per_page=24&format=json&nojsoncallback=1"
    )
      .then(response => {
        return response.json();
      })
      .then(resImages => {
        this.setState({ searchedImages: resImages.photos.photo });
      })
      .catch(error => {
        console.log("Error fetching and passing data", error);
      });
  };

  searchImages = e => {
    console.log(e);
    //e.preventDefault();
  };

  render() {
    return (
      <div className="container">
        <form className="search-form">
          <input type="search" name="search" placeholder="Search" required />
          <button
            type="submit"
            className="search-button"
            onClick={this.searchImages("AAA")}
          >
            <svg
              fill="#fff"
              height="24"
              viewBox="0 0 23 23"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </button>
        </form>

        <nav className="main-nav">
          <ul>
            <li>
              <a href="#" onClick={() => this.getImages("cat")}>
                Cats
              </a>
            </li>
            <li>
              <a href="#" onClick={() => this.getImages("dog")}>
                Dogs
              </a>
            </li>
            <li>
              <a href="#" onClick={() => this.getImages("computer")}>
                Computers
              </a>
            </li>
          </ul>
        </nav>

        <div className="photo-container">
          <h2>Results</h2>
          <ul>
            {this.state.searchedImages.map(photo => (
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
      </div>
    );
  }
}

export default App;
