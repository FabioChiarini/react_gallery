import React, { Component } from "react";
import "./App.css";
import apiKey from "./config.js";
import "./index.css";

import PhotoContainer from "./PhotoContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";
import Header from "./Header";

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchedImages: [],
      title: ""
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
        this.setState({
          searchedImages: resImages.photos.photo,
          title: tag.toUpperCase()
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
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Header getImages={this.getImages} />}
            />

            <Route
              path="/search/:images"
              render={() => (
                <div>
                  <Header getImages={this.getImages} />
                  <PhotoContainer
                    searchedImages={this.state.searchedImages}
                    title={this.state.title}
                  />
                </div>
              )}
            />

            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
