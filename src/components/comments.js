import React, { Component } from "react";
import Comment from "./comment";

class ImageComments extends Component {
  componentWillReceiveProps(nextProps) {
    this.count = nextProps.comments.length;
    this.comments = nextProps.comments.map(comment => (
      <Comment key={comment.id} data={comment} />
    ));
  }
  render() {
    return (
      <React.Fragment>
        <div className="comments-header">{this.count} Comments</div>
        {this.comments}
      </React.Fragment>
    );
  }
}

export default ImageComments;
