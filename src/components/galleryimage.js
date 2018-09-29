import React, { Component } from "react";

class GalleryImage extends Component {
  render() {
    const { imageId } = this.props.match.params;
    const { selectedImage } = this.props;
    return (
      <div className="gallery-image">
        <div className="image-title">{selectedImage.Title}</div>
        <div className="image-container">
          <img src={selectedImage.Url} alt={selectedImage.Title} />
        </div>
        <div className="image-description">{selectedImage.Description}</div>
      </div>
    );
  }
}

export default GalleryImage;
