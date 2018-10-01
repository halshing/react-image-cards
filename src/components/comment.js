import React, { Component } from "react";

const Comment = props => {
  const { data } = props;
  console.log(data);
  return (
    <div className="comment-container">
      <div className="comment-details">
        <span className="comment-author">{data.author}</span>
        <span className="comment-platform">via {data.platform}</span>
        <span className="comment-points">
          {data.points}
          pts
        </span>
      </div>
      <div className="comment">{data.comment}</div>
    </div>
  );
};

export default Comment;
