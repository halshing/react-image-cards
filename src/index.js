import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import data from './data.json';
import Cards from './components/cards';
import Modal from './components/modal';

class App extends Component {
  state = {
    cards: data,
    modalOptions: {},
    isModalOpen: false
  }

  // Handle modal
  modal = {
    open: info => {
      this.setState({
        modalOptions: info,
        isModalOpen: true
      });
    },
    close: (e) => {
      if (e.target.className == "modal-overlay") {
        this.setState({
          modalOptions: {},
          isModalOpen: false
        });
      }
    }
  }

  render() {
    const { cards, modalOptions, isModalOpen } = this.state;
    return (
      <React.Fragment>
        <Cards cards={cards} openModal={this.modal.open} />
        {/* <Modal options={modalOptions} isModalOpen={isModalOpen} closeModal={this.modal.close} /> */}
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById('root'));
