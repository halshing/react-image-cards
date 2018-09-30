import React, { Component } from "react";

const Card = props => {
  let { card } = props.config;
  return (
    <div className="col-xs-12 card-container" onClick={props.openImage}>
      <div className="card-image">
        <img src={card.link} title={card.title} />
      </div>
      <div className="card-details">
        <div className="card-title">{card.title.substring(0, 60)}</div>
        <div className="card-stats">
          <div className="icon-container icon-upvote">
            <div className="icon" />
            <div className="stat-number">{card.ups}</div>
          </div>
          <div className="icon-container icon-downvote">
            <div className="icon" />
            <div className="stat-number">{card.downs}</div>
          </div>
          <div className="icon-container icon-comments">
            <div className="icon" />
            <div className="stat-number">{card.comment_count}</div>
          </div>
          <div className="icon-container icon-views">
            <div className="icon" />
            <div className="stat-number">{card.views}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
