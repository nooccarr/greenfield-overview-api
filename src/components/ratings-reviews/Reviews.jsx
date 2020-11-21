import React, { useState, useEffect } from 'react';
import Review from './Review.jsx';
import AddReviewModal from './AddReviewModal';

function Reviews(props) {
  const reviewsFromProps = props.allReviews;
  const [reviewRenderCount, setReviewRenderCount] = useState(2);

  // -------------- Handling and state for modal / add review button ---------------------
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  let handleReviewClick = () => {
    setReviewRenderCount(reviewRenderCount + 2);
  };

  let handleSortClick = (sortMethod) => {
    props.setSortMethod(sortMethod);
  };

  // -------------------------- filter by stars --------------------------------
  let activeStarFilters;
  if (props.starFilters.length > 0) {
    activeStarFilters = (
      <div>
        <h5 style={{ padding: '2rem' }}>
          Showing{' '}
          {props.starFilters.map(
            (filter, index) => (index ? ', ' : '') + filter
          )}{' '}
          star reviews
          <p
            style={{
              display: 'inline',
              cursor: 'pointer',
              fontSize: 'medium',
              paddingLeft: '2rem',
            }}
            onClick={props.handleClearFilterClick}
          >
            (clear filters)
          </p>
        </h5>
      </div>
    );
  }

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
        {activeStarFilters}
        <button
          id="add-review-button"
          style={{ margin: '4rem' }}
          onClick={() => setShow(true)}
        >
          ADD A REVIEW +
        </button>
        <AddReviewModal show={show} handleClose={handleClose} />
      </div>
    );
  } else if (reviewsFromProps.length <= 2) {
    return (
      <div className="reviews-container">
        <h4 className="review-header">
          {reviewsFromProps.length} reviews, sorted by {dropdownButton}
        </h4>
        {activeStarFilters}
        <div>{renderReviews(reviewsFromProps)}</div>
        <button
          id="add-review-button"
          style={{ margin: '4rem' }}
          onClick={() => setShow(true)}
        >
          ADD A REVIEW +
        </button>
        <AddReviewModal show={show} handleClose={handleClose} />
      </div>
    );
  } else if (reviewsFromProps.length > 2) {
    return (
      <div className="reviews-container">
        <h4 className="review-header">
          {reviewsFromProps.length} reviews, sorted by {dropdownButton}
        </h4>
        {activeStarFilters}
        <div>{renderReviews(reviewsFromProps.slice(0, reviewRenderCount))}</div>
        <div className="review-buttons-bottom">
          <button id="more-reviews-button" onClick={handleReviewClick}>
            MORE REVIEWS
          </button>
          <button id="add-review-button" onClick={() => setShow(true)}>
            ADD A REVIEW +
          </button>
          <AddReviewModal
            show={show}
            handleClose={handleClose}
            productCharacteristics={props.productCharacteristics}
          />
        </div>
      </div>
    );
  }
  return <div></div>;
}

export default Reviews;
