import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import AddMoreForm from './AddMoreForm';

function AddMoreModal(props) {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          <h1>Item Characteristics</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddMoreForm productCharacteristics={props.productCharacteristics} />
      </Modal.Body>
    </Modal>
  );
}

export default AddMoreModal;
