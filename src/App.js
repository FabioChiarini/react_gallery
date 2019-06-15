import React, { Component } from "react";
import "./App.css";
import apiKey from "./config.js";
import "./index.css";
import Photo from "./Photo";
import SearchForm from "./SearchForm";

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
    //console.log(e);
    e.preventDefault();
    //e.preventDefault();
  };

  render() {
    return (
      <div className="container">
        <SearchForm />

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
