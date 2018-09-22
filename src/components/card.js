import React, { Component } from "react";
import { render } from "react-dom";

const Card = ({ config }) => {
  let { card, size, margin, openModal } = config;
  return (
    <div
      className="card-container"
      onClick={() => {
        openModal(card);
      }}
    >
      <div className="card-image">
        <img src={card.Url} title={card.Title} />
      </div>
      <div className="card-details">
        <div className="card-title">{card.Title}</div>
        <div className="card-stats">
          <div className="icon icon-upvote">Up {card.Stats.Upvotes}</div>
          <div className="icon icon-downvote">Down {card.Stats.Downvotes}</div>
          <div className="icon icon-comments">Comments {card.Stats.Comments}</div>
          <div className="icon icon-views">Views {card.Stats.Views}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
