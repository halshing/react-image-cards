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
      data-image-url={card.Url}
      data-image-id={
        card.Url.substring(
          card.Url.lastIndexOf("/") + 1,
          card.Url.length
        ).split(".")[0]
      }
    >
      <div className="card-image">
        <img src={card.Url} title={card.Title} />
      </div>
      <div className="card-details">
        <div className="card-title">{card.Title}</div>
        <div className="card-stats">
          <div className="icon-container">
            <div className="icon icon-upvote" />
            <div className="stat-number">{card.Stats.Upvotes}</div>
          </div>
          <div className="icon-container">
            <div className="icon icon-downvote" />
            <div className="stat-number">{card.Stats.Downvotes}</div>
          </div>
          <div className="icon-container">
            <div className="icon icon-comments" />
            <div className="stat-number">{card.Stats.Comments}</div>
          </div>
          <div className="icon-container">
            <div className="icon icon-views" />
            <div className="stat-number">{card.Stats.Views}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
