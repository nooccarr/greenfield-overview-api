import React, { useState, useEffect } from 'react';

function ProductBreakdownBars(props) {
  // create an array of object characterstic values
  // create corresponding titles and labels for each
  // pass to breakdownBar to render
  // map magic
  return (
    <div id="product-breakdown">
      <div class="slidecontainer">
        <p id="breakdown-label-title">test</p>
        <input
          type="range"
          min="1"
          max="5"
          value="3.5714"
          class="slider"
          id="myRange"
        />
        <p id="breakdown-label-min">too small</p>
        <p id="breakdown-label-max">too big</p>
      </div>
    </div>
  );
}

export default ProductBreakdownBars;
