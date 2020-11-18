import React, { useState, useEffect } from 'react';

function BreakdownBar(props) {
  let breakdownLabelObj = {
    Size: ['too small', 'too big'],
    Width: ['narrow', 'wide'],
    Comfort: ['Uncomfortable', 'Very Comfortable'],
    Quality: ['Poor', 'Great'],
    Length: ['Short', 'Long'],
    Fit: ['Too Small', 'Too large'],
  };

  return (
    <div className="slidecontainer">
      {/* <p id="breakdown-label-title">{props.characteristic[char] }</p> */}
      <input
        type="range"
        min="1"
        max="5"
        value={5}
        class="slider"
        id="myRange"
      />
      {/* <p id="breakdown-label-min">{breakdownLabelObj[props.characteristic[char]][0]}</p>
      <p id="breakdown-label-max">{breakdownLabelObj[props.characteristic[char]][1]}</p> */}
    </div>
  );
}

export default BreakdownBar;
