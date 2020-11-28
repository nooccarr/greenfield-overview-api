import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import ReviewForm from './ReviewForm';

function AddReviewModal(props) {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          <h1>Write Your Review</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ReviewForm productCharacteristics={props.productCharacteristics} />
      </Modal.Body>
    </Modal>
  );
}

export default AddReviewModal;
