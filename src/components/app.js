import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import data from "../data.json";
import * as routes from "../constants/routes";
import Cards from "./cards";
import GalleryImage from "./galleryimage";

class App extends Component {
  state = {
    cards: data,
    selectedImage: {
      Url: "https://via.placeholder.com/240x135",
      Title: "Cannot display image",
      Description: "There was a problem showing this image."
    }
  };

  openImage = (history, image) => {
    let imageId = image.Url.substring(
      image.Url.lastIndexOf("/") + 1,
      image.Url.length
    ).split(".")[0];
    history.push(`/gallery/${imageId}`);
    this.setState({ selectedImage: image });
  };

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
              exact
              path={routes.GALLERY_IMAGE + "/:imageId"}
              render={props => (
                <GalleryImage
                  {...props}
                  selectedImage={this.state.selectedImage}
                />
              )}
            />
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
