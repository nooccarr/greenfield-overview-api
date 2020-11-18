import React, { useState, useEffect } from 'react';
import Rating from '@material-ui/lab/Rating';
import Stars from './Stars';

function Review(props) {
  return (
    <div className="single-review">
      <Rating
        // value={props.allReviews.rating}
        value={props.indReview.rating}
        precision={0.1}
        readOnly
        size="small"
        id="review-stars"
      />
      <p className="individual-review-user">{props.indReview.reviewer_name}</p>
      <h3 className="individual-review-header">{props.indReview.summary}</h3>
      <p className="individual-review-body">{props.indReview.body}</p>
      <div className="individual-review-photos">
        {/* some kind map magic here to render out review photos */}
        <hr></hr>
      </div>
    </div>
  );
}

export default Review;
