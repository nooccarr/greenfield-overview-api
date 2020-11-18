import React, { useState, useEffect } from 'react';
import Review from './Review.jsx';

function Reviews(props) {
  return (
    <div className="reviews-container">
      <h4>{props.reviewCount} reviews, sorted by</h4>
      <div className="main-review-block">
        <Review allRatings={props.allRatings} allReviews={props.allReviews} />
      </div>
    </div>
  );
}

export default Reviews;
