import React, { Component } from 'react';
import { render } from 'react-dom';

class Modal extends Component {
  render() {
    const { options, isModalOpen, closeModal } = this.props;
    return (
      <div className={isModalOpen ? "modal-overlay" : "modal-overlay hide"} onClick={e => closeModal(e)}>
        <div className="modal-content">
          {/*<button className="modal-btnClose" onClick={e => closeModal(e)}>X</button>*/}
          <div className="modal-body">
            <div className="modal-title">{options.Title}</div>
            <div className="modal-image"><img src={options.Url} style={{ width: 400, height: 400 }} /></div>
            <div className="modal-description">{options.Description}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;