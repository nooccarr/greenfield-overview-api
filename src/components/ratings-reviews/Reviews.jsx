import React, { useState, useEffect } from 'react';
import Review from './Review.jsx';

function Reviews(props) {
  const reviewsFromProps = props.allReviews;
  const [reviewRenderCount, setReviewRenderCount] = useState(2);

  const renderReviews = (allReviews) => {
    return allReviews.map((review) => {
      return (
        <div className="reviews-container">
          <div className="main-review-block">
            <Review indReview={review} />
          </div>
        </div>
      );
    });
  };

  let handleReviewClick = () => {
    setReviewRenderCount(reviewRenderCount + 2);
  };

  if (!props.allReviews) {
    return (
      <div className="reviews-container">
        <h4 className="review-header">0 reviews for this item</h4>
      </div>
    );
  } else if (reviewsFromProps.length <= 2) {
    return (
      <div className="reviews-container">
        <h4 className="review-header">
          {reviewsFromProps.length} reviews, sorted by
        </h4>
        <div>{renderReviews(reviewsFromProps)}</div>
      </div>
    );
  } else if (reviewsFromProps.length > 2) {
    return (
      <div className="reviews-container">
        <h4 className="review-header">
          {reviewsFromProps.length} reviews, sorted by
        </h4>
        <div>{renderReviews(reviewsFromProps.slice(0, reviewRenderCount))}</div>
        <div className="review-buttons-bottom">
          <button id="more-reviews-button" onClick={handleReviewClick}>
            MORE REVIEWS
          </button>
          <button id="add-review-button">ADD A REVIEW +</button>
        </div>
      </div>
    );
  }
  return <div></div>;
}

export default Reviews;
