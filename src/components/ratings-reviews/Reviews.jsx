import React, { useState, useEffect } from 'react';
import Review from './Review.jsx';

function Reviews(props) {
  const reviewsFromProps = props.allReviews;
  const [reviewRenderCount, setReviewRenderCount] = useState(2);

  let handleReviewClick = () => {
    setReviewRenderCount(reviewRenderCount + 2);
  };
  let handleSortClick = (sortMethod) => {
    props.setSortMethod(sortMethod);
    console.log(sortMethod);
  };

  let dropdownButton = (
    <select
      name="sort-dropdown"
      id="sort-dropdown"
      onChange={(e) => handleSortClick(e.target.value)}
    >
      <option value="relevance">relevance</option>
      <option value="helpful">helpfulness</option>
      <option value="newest">newest</option>
    </select>
  );

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

  if (!props.allReviews) {
    return (
      <div className="reviews-container">
        <h4 className="review-header">0 reviews for this item</h4>
        <button id="add-review-button">ADD A REVIEW +</button>
      </div>
    );
  } else if (reviewsFromProps.length === 0) {
    return (
      <div className="reviews-container">
        <h4 className="review-header">0 reviews for this item</h4>
        <button id="add-review-button" style={{ margin: '4rem' }}>
          ADD A REVIEW +
        </button>
      </div>
    );
  } else if (reviewsFromProps.length <= 2) {
    return (
      <div className="reviews-container">
        <h4 className="review-header">
          {reviewsFromProps.length} reviews, sorted by {dropdownButton}
        </h4>
        <div>{renderReviews(reviewsFromProps)}</div>
        <button id="add-review-button" style={{ margin: '4rem' }}>
          ADD A REVIEW +
        </button>
      </div>
    );
  } else if (reviewsFromProps.length > 2) {
    return (
      <div className="reviews-container">
        <h4 className="review-header">
          {reviewsFromProps.length} reviews, sorted by {dropdownButton}
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
