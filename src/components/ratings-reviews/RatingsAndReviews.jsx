import React, { useState, useEffect } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Rating from '@material-ui/lab/Rating';

function RatingsAndReviews(props) {
  // default values until state updates propery
  let percentagesObj;
  if (props.ratingsPercentages) {
    percentagesObj = props.ratingsPercentages;
  } else {
    percentagesObj = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  }

  return (
    <div className="ratings-container">
      <h6>RATINGS & REVIEWS</h6>
      <h5 id="large-rating">{props.ratingAverage}</h5>
      <Rating
        value={props.ratingAverage}
        precision={0.1}
        readOnly
        size="small"
        id="main"
      />
      <p>
        {props.recommendPercentage * 100}% of reviews recommend this product
      </p>
      <div id="bar-labels">
        <p className="bar-label">5 stars</p>
        <p className="bar-label">4 stars</p>
        <p className="bar-label">3 stars</p>
        <p className="bar-label">2 stars</p>
        <p className="bar-label">1 stars</p>
      </div>
      <div id="bars">
        <ProgressBar
          className="rating-bar"
          now={percentagesObj[5]}
          variant="success"
        />
        <ProgressBar
          className="rating-bar"
          now={percentagesObj[4]}
          variant="success"
        />
        <ProgressBar
          className="rating-bar"
          now={percentagesObj[3]}
          variant="success"
        />
        <ProgressBar
          className="rating-bar"
          now={percentagesObj[2]}
          variant="success"
        />
        <ProgressBar
          className="rating-bar"
          now={percentagesObj[1]}
          variant="success"
        />
      </div>
    </div>
  );
}

export default RatingsAndReviews;
