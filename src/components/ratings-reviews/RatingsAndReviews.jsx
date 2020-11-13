import React, { useState, useEffect } from 'react';

function RatingsAndReviews(props) {
  return (
    <div className="ratings-container">
      <h2>RATINGS & REVIEWS</h2>
      <h5>{props.ratingAverage}</h5>
    </div>
  );
}

export default RatingsAndReviews;
