import React, { Component } from "react";
import ImageComments from "./comments";

class GalleryImage extends Component {
  state = {
    comments: []
  };
  componentDidMount() {
    const { selectedImage } = this.props;
    let options = {
      headers: new Headers({
        Authorization: `Client-ID ${process.env.REACT_APP_IMGUR_CLIENTID}`
      })
    };
    let url = `https://api.imgur.com/3/gallery/${selectedImage.id}/comments/`;
    let request = new Request(url, options);
    fetch(request)
      .then(res => res.json())
      .then(response => {
        this.setState({ comments: response.data });
      })
      .catch(err => {
        console.error(err);
      });
  }
  render() {
    const { selectedImage } = this.props;
    return (
      <div className="gallery-image">
        <div className="selectedImage">
          <div className="image-title">{selectedImage.title}</div>
          <div className="image-container">
            <img src={selectedImage.link} alt={selectedImage.title} />
          </div>
          <div className="image-description">{selectedImage.description}</div>
        </div>
        <div className="selectedImage-comments">
          <ImageComments selectedImage={selectedImage} comments={this.state.comments} />
        </div>
      </div>
    );
  }
}

export default GalleryImage;
