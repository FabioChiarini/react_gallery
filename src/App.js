import React, { Component } from "react";
import "./App.css";
import apiKey from "./config.js";
import "./index.css";
import Nav from "./Nav";
import SearchForm from "./SearchForm";
import PhotoContainer from "./PhotoContainer";

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


        {/* Setting the anchor tags to their respective search tags */}
        <Nav getImages={this.getImages}/>

        <PhotoContainer searchedImages = {this.state.searchedImages}/>



      </div>
    );
  }
}

export default App;
