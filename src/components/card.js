import React, { Component } from "react";

const Card = ({ config }) => {
  let { card } = config;
  return <div className="card-container" data-image-url={card.Url} data-image-id={card.Url.substring(card.Url.lastIndexOf("/") + 1, card.Url.length).split(".")[0]}>
      <div className="card-image">
        <img src={card.Url} title={card.Title} />
      </div>
      <div className="card-details">
        <div className="card-title">{card.Title.substring(0, 60)}</div>
        <div className="card-stats">
          <div className="icon-container icon-upvote">
            <div className="icon" />
            <div className="stat-number">{card.Stats.Upvotes}</div>
          </div>
          <div className="icon-container icon-downvote">
            <div className="icon" />
            <div className="stat-number">{card.Stats.Downvotes}</div>
          </div>
        <div className="icon-container icon-comments">
            <div className="icon" />
            <div className="stat-number">{card.Stats.Comments}</div>
          </div>
        <div className="icon-container icon-views">
            <div className="icon" />
            <div className="stat-number">{card.Stats.Views}</div>
          </div>
        </div>
      </div>
    </div>;
};

export default Card;
