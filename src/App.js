import React, { Component } from "react";
import "./App.css";
import apiKey from "./config.js";
import "./index.css";

import PhotoContainer from "./PhotoContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";
import Header from "./Header";
import SearchForm from "./SearchForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchedImages: [],
      title: "",
      loading_state: true
    };
  }

  //method to get the API images to display starting from a tag parameter
  getImages = tag => {
    this.setState({
      loading_state: true
    });
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
        this.setState({
          searchedImages: resImages.photos.photo,
          title: tag.toUpperCase(),
          loading_state: false
        });
      })
      .catch(error => {
        console.log("Error fetching and passing data", error);
      });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          {/* Adding Search form component to the page and passing the 
        getImage function as a prop, so that it can be used 
        in the SearchForm component */}
          <Route
            path="/"
            render={props => (
              <SearchForm {...props} getImages={this.getImages} />
            )}
          />
          <Route
            path="/"
            render={props => <Header getImages={this.getImages} />}
          />
          <Switch>
            <Route
              path="/search/:images"
              render={() =>
                this.state.loading_state ? (
                  <h1>LOADING IMAGES</h1>
                ) : (
                  <PhotoContainer
                    searchedImages={this.state.searchedImages}
                    title={this.state.title}
                  />
                )
              }
            />

            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
