import React, { useState, useEffect } from 'react';
import Rating from '@material-ui/lab/Rating';

function Review(props) {
  let truncSummary;
  if (props.indReview.summary.length < 35) {
    truncSummary = props.indReview.summary;
  } else {
    truncSummary = `${props.indReview.summary.slice(0, 35)}...`;
  }
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
      <h3 className="individual-review-header">{truncSummary}</h3>
      <p className="individual-review-body">{props.indReview.body}</p>
      <div className="individual-review-photos">
        {/* map magic here to render out review photos */}
        <hr></hr>
      </div>
    </div>
  );
}

export default Review;
