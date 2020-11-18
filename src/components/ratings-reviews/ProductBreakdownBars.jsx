import React, { useState, useEffect } from 'react';
import BreakdownBar from './BreakdownBar';

function ProductBreakdownBars(props) {
  const [charToPass, setCharToPass] = useState(null);

  let breakdownLabelObj = {
    Size: ['too small', 'too big'],
    Width: ['narrow', 'wide'],
    Comfort: ['Uncomfortable', 'Very Comfortable'],
    Quality: ['Poor', 'Great'],
    Length: ['Short', 'Long'],
    Fit: ['Too Small', 'Too large'],
  };

  let charArray;
  if (props.productCharacteristics) {
    charArray = Object.keys(props.productCharacteristics);
  } else {
    charArray = [];
  }

  if (charArray.length > 0) {
    return charArray.map((char) => {
      {
        let characteristic = {
          char: char,
          value: props.productCharacteristics[char].value,
        };
        console.log(characteristic);
      }
      return (
        <div className="slidecontainer">
          <p id="breakdown-label-title">{char}</p>
          <input
            type="range"
            min="1"
            max="5"
            value={props.productCharacteristics[char].value}
            class="slider"
            id="myRange"
          />
          <p id="breakdown-label-min">{breakdownLabelObj[char][0]}</p>
          <p id="breakdown-label-max">{breakdownLabelObj[char][1]}</p>
        </div>
      );
    });
  }
  return <div></div>;
  // let renderBreakdownBars = function () {
  //   return characteristics.map((characteristic) => {
  //     <BreakdownBar
  //       characteristic={
  //         props.productCharacteristics.characteristics.characteristic.value
  //       }
  //     />;
  //   });
  // };

  // let char = 'Fit';
  // if (props.productCharacteristics) {
  //   console.log(props.productCharacteristics[char].id);
  // }
}

export default ProductBreakdownBars;
