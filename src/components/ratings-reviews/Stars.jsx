import React, { useState, useEffect } from 'react';
import { findRatingAverage } from './Rating-Helpers';
import Rating from '@material-ui/lab/Rating';

// pass in ratings from reviews/meta get request
function Stars(props) {
  let currentRating;
  if (!props.ratings) {
    currentRating = 0;
  } else {
    currentRating = findRatingAverage(props.ratings);
  }

  return (
    <Rating
      value={currentRating}
      precision={0.1}
      readOnly
      size="small"
      id="review-stars"
    />
  );
}

export default Stars;
