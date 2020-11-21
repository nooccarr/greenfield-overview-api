import React, { useState, useEffect } from 'react';

function AddMoreForm(props) {
  let chars = Object.keys(props.productCharacteristics);

  let charLabels = {
    Size: [
      'A size too small',
      '½ a size too small',
      'Perfect, ½ a size too big',
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

  return (
    <div>
      <h1>stuff</h1>
      <p>{chars}</p>
    </div>
  );
}

export default AddMoreForm;
