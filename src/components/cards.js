import React, { Component } from "react";
import Card from "./card";

const Cards = props => {
  const { cards } = props;
  return (
    <div className="all-cards">
      {cards.map((card, index) => (
        <Card key={index} config={{ card }} />
      ))}
    </div>
  );
};

export default Cards;
