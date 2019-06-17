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

  //method to get the API images to display starting from a tag parameter
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

  render() {
    return (
      <div className="container">
        {/* Adding Search form component to the page and passing the 
        getImage function as a prop, so that it can be used 
        in the SearchForm component */}
        <SearchForm getImages={this.getImages} />

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
            {/*display on the page the images obtained from the API
            formatting the URL as requested in the documentation*/}
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
