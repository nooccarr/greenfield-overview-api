import React, { useState, useEffect } from 'react';

function ProductBreakdownBars(props) {
  return (
    <div id="product-breakdown">
      <div class="slidecontainer">
        <p id="breakdown-label-title"></p>
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
