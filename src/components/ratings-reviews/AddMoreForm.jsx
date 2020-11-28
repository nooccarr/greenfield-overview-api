import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AddMoreForm(props) {
  let charArray;

  if (!props.productCharacteristics) {
    charArray = [];
  } else {
    charArray = Object.keys(props.productCharacteristics);
  }

  let charLabels = {
    Size: [
      'A size too small',
      '½ a size too small',
      'Perfect',
      '½ a size too big',
      'A size too wide',
    ],
    Width: [
      'Too narrow',
      'Slightly narrow',
      'Perfect',
      'Slightly wide',
      'Too wide',
    ],
    Comfort: [
      'Uncomfortable',
      'Very Comfortable',
      'Ok',
      'Comfortable',
      'Perfect',
    ],
    Quality: [
      'Poor',
      'Below average',
      'What I expected',
      'Pretty great',
      'Perfect',
    ],
    Length: [
      'Runs Short',
      'Runs slightly short',
      'Perfect',
      'Runs slightly long',
      'Runs long',
    ],
    Fit: [
      'Runs tight',
      'Runs slightly tight',
      'Perfect',
      'Runs slightly large',
      'Runs large',
    ],
  };

  let mappedChars = charArray.map((char) => {
    return (
      <div>
        <h3>{char}</h3>
        <Form.Group>
          <Form.Check type="radio" label={charLabels[char][0]} />
          <Form.Check type="radio" label={charLabels[char][1]} />
          <Form.Check type="radio" label={charLabels[char][2]} />
          <Form.Check type="radio" label={charLabels[char][3]} />
          <Form.Check type="radio" label={charLabels[char][4]} />
        </Form.Group>
      </div>
    );
    tempCount++;
  });

  console.log(mappedChars);

  return (
    <div>
      <p>{mappedChars}</p>
      <hr></hr>
      <Button
        id="review-submit-button"
        type="submit"
        style={{ float: 'right', margin: '1rem 1rem' }}
      >
        Submit
      </Button>
    </div>
  );
}

export default AddMoreForm;
