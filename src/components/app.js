import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import * as routes from "../constants/routes";
import Cards from "./cards";
import GalleryImage from "./galleryimage";

class App extends Component {
  state = {
    cards: [],
    selectedImage: {
      Url: "https://via.placeholder.com/240x135",
      Title: "Cannot display image",
      Description: "There was a problem showing this image."
    }
  };

  componentWillMount() {
    let options = {
      headers: new Headers({
        Authorization: `Client-ID ${process.env.REACT_APP_IMGUR_CLIENTID}`
      })
    };
    let url = "https://api.imgur.com/3/gallery/search/?q_all=cats&q_type=png";
    let request = new Request(url, options);
    fetch(request)
      .then(res => res.json())
      .then(response => {
        this.setState({ cards: response.data });
      });
  }

  openImage = (history, image) => {
    history.push(`/gallery/${image.id}`);
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
