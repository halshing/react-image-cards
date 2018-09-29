import React, { Component } from "react";
import Card from "./card";

const Cards = props => {
  const { history, cards, openImage } = props;
  return (
    <div className="all-cards">
      {cards.map((card, index) => (
        <Card
          key={index}
          config={{ card }}
          openImage={() => openImage(history, card)}
        />
      ))}
    </div>
  );
};

export default Cards;
