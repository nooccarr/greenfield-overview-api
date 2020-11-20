import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ReviewForm from './ReviewForm';

function AddReviewModal(props) {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          <h1>Write Your Review</h1> <p>about product</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ReviewForm />
      </Modal.Body>
    </Modal>
  );
}

export default AddReviewModal;
