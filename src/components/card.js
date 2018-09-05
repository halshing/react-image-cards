import React, { Component } from 'react';
import { render } from 'react-dom';

const Card = ({ config }) => {
  let { card, size, margin, openModal } = config;
  return (
    <div className="icon-image" style={{ margin: margin }} onClick={() => { openModal(card) }}>
      <div className="icon-overlay" style={{ width: size, height: size }}></div>
      <img src={card.Url} title={card.Title} style={{ width: size, height: size }} />
    </div>
  );
}

export default Card;