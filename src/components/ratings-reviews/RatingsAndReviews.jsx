import React, { useState, useEffect } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Rating from '@material-ui/lab/Rating';
import ProductBreakdownBars from './ProductBreakdownBars';

function RatingsAndReviews(props) {
  let percentagesObj;
  let recPercentage;
  if (props.ratingsPercentages) {
    percentagesObj = props.ratingsPercentages;
  } else {
    percentagesObj = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  }

  if (props.recommendPercentage) {
    recPercentage = Math.round(props.recommendPercentage * 100);
  } else {
    recPercentage = 0;
  }

  let handleStarFilterClick = (starValue) => {
    if (props.starFilters.indexOf(starValue) === -1)
      props.setStarFilters([...props.starFilters, starValue]);
  };

  return (
    <div className="ratings-container">
      <h6>RATINGS & REVIEWS</h6>
      <div className="main-rating">
        <h5 id="large-rating">{props.ratingAverage}</h5>
        <Rating
          value={props.ratingAverage}
          precision={0.1}
          readOnly
          size="small"
          id="main-stars"
        />
      </div>
      <div id="recommendation">
        <p>{recPercentage}% of reviews recommend this product</p>
      </div>
      <div id="bar-labels">
        <p
          className="bar-label"
          style={{ cursor: 'pointer' }}
          onClick={() => {
            handleStarFilterClick(5);
            props.filterByStar();
          }}
        >
          5 stars
        </p>
        <p
          className="bar-label"
          style={{ cursor: 'pointer' }}
          onClick={() => {
            handleStarFilterClick(4);
            props.filterByStar();
          }}
        >
          4 stars
        </p>
        <p
          className="bar-label"
          style={{ cursor: 'pointer' }}
          onClick={() => {
            handleStarFilterClick(3);
            props.filterByStar();
          }}
        >
          3 stars
        </p>
        <p
          className="bar-label"
          style={{ cursor: 'pointer' }}
          onClick={() => {
            handleStarFilterClick(2);
            props.filterByStar();
          }}
        >
          2 stars
        </p>
        <p
          className="bar-label"
          style={{ cursor: 'pointer' }}
          onClick={() => {
            handleStarFilterClick(1);
            props.filterByStar();
          }}
        >
          1 stars
        </p>
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
      <ProductBreakdownBars
        productCharacteristics={props.productCharacteristics}
        id="product-breakdown-main"
      />
    </div>
  );
}

export default RatingsAndReviews;
