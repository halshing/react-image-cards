import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import data from "../data.json";
import * as routes from "../constants/routes";
import Cards from "./cards";
import GalleryImage from "./galleryimage";

class App extends Component {
  state = {
    cards: data,
    selectedImage: null
  };

  openImage = (history, image) => {
    let imageId = image.Url.substring(
      image.Url.lastIndexOf("/") + 1,
      image.Url.length
    ).split(".")[0];
    history.push(`/gallery/${imageId}`);
    this.setState({ selectedImage: image });
  }

  render() {
    const { cards } = this.state;
    return (
      <Router>
        <div className="app-container">
          <Switch>
            <Route
              exact
              path={routes.DEFAULT_GALLERY}
              render={props => (
                <Cards {...props} cards={cards} openImage={this.openImage} />
              )}
            />
            <Route
              path={routes.GALLERY_IMAGE + "/:imageId"}
              render={props => (
                <GalleryImage {...props} selectedImage={this.state.selectedImage} />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
