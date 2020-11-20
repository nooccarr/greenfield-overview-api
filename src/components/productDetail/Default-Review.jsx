// fetch review rating of current product
import React from 'react';
import Rating from '@material-ui/lab/Rating';

const Review = (props) => {
  return (
    <div className="default-review">
      <Rating
        value={props.ratingAverage}
        precision={0.1}
        readOnly
        size="small"
        id="main-stars"
      />
      <h6 style={{ textDecoration: 'underline' }}>read all reviews</h6>
    </div>
  );
};

export default Review;
