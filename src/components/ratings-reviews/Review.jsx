import React, { useState, useEffect } from 'react';
import Rating from '@material-ui/lab/Rating';

function Review(props) {
  let truncSummary;
  let recommendedLine = '';
  let convertedDate = new Date(props.indReview.date).toLocaleDateString(
    'en-gb',
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
  );

  if (props.indReview.summary.length < 35) {
    truncSummary = props.indReview.summary;
  } else {
    truncSummary = `${props.indReview.summary.slice(0, 35)}...`;
  }

  if (props.indReview.recommend === 1) {
    recommendedLine = '✓ I recommend this product';
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
      <p className="individual-review-user">
        {props.indReview.reviewer_name} | {convertedDate}
      </p>
      <h3 className="individual-review-header">{truncSummary}</h3>
      <p className="individual-review-body">{props.indReview.body}</p>
      <div className="individual-review-photos">
        {/* map magic here to render out review photos */}
        <p id="individual-review-recommended">{recommendedLine}</p>
        <div id="helpful-report">
          <p>Helpful? Yes({props.indReview.helpfulness}) | report</p>
        </div>
        <hr id="review-line-break"></hr>
      </div>
    </div>
  );
}

export default Review;
