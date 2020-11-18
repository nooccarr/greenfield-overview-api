import React, { useState, useEffect } from 'react';
import Review from './Review.jsx';

function Reviews(props) {
  const reviewsFromProps = props.allReviews;

  const renderReviews = (allReviews) => {
    return allReviews.map((review) => {
      console.log(review);
      return (
        <div className="reviews-container">
          <div className="main-review-block">
            <Review
              allRatings={props.allRatings}
              allReviews={props.allReviews}
              indReview={review}
            />
          </div>
        </div>
      );
    });
  };

  if (!props.allReviews) {
    return (
      <div className="reviews-container">
        <h4 className="review-header">0 reviews for this item</h4>
      </div>
    );
  } else if (reviewsFromProps.length <= 2) {
    return (
      <div>
        <h4 className="review-header">
          {props.reviewCount} reviews, sorted by
        </h4>
        <div>{renderReviews(reviewsFromProps)}</div>
      </div>
    );
  }
  return <div></div>;
}

export default Reviews;
