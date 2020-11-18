import React, { useState, useEffect } from 'react';
import Rating from '@material-ui/lab/Rating';
import Stars from './Stars';

function Review(props) {
  return (
    <div className="single-review">
      <Rating
        // value={props.allReviews.rating}
        value={2}
        precision={0.1}
        readOnly
        size="small"
        id="review-stars"
      />
    </div>
  );
}

export default Review;
