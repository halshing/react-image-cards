import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import data from './data.json';
import Cards from './components/cards';

class App extends Component {
  state = {
    cards: data
  }

  render() {
    const { cards } = this.state;
    return (
      <React.Fragment>
        <Cards cards={cards} />
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById('root'));
