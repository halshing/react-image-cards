import React, { Component } from 'react';
import { render } from 'react-dom';
import Card from './card';
import Modal from './modal';

class Cards extends Component {
  state = {
    size: 100,
    cols: 4,
    margin: 5
  }

  render() {
    const { cards, openModal } = this.props;
    const { size, cols, margin } = this.state;

    return (
      <div className="cards-container" style={{ width: cols * (size + 2 * margin) }}>
        {cards.map((card, index) => (
          <Card key={index} config={{ card, size, margin, openModal }} />
        ))}
      </div>
    );
  }
}

export default Cards;