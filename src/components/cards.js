import React, { Component } from "react";
import { render } from "react-dom";
import Card from "./card";
import Modal from "./modal";

class Cards extends Component {
  state = {};

  render() {
    const { cards, openModal } = this.props;
    //const { size, cols, margin } = this.state;

    return (
      <div className="all-cards">
        {cards.map((card, index) => (
          <Card key={index} config={{ card, openModal }} />
        ))}
      </div>
    );
  }
}

export default Cards;
