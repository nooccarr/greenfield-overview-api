// fetch review rating of current product
import React, { useRef } from 'react';
import Rating from '@material-ui/lab/Rating';

const Review = (props) => {
  const goToReviewSection = () =>
    window.scrollTo({
      top: reviewSection.offsetTop,
      behavior: 'smooth',
    });
  const element = document.getElementsByClassName('review-main-container');

  return (
    <div className="default-review">
      <Rating
        value={props.ratingAverage}
        precision={0.1}
        readOnly
        size="small"
        id="main-stars"
      />
      <h6
        style={{ textDecoration: 'underline', cursor: 'pointer' }}
        onClick={() => {
          console.log(element[0]);
          element[0].scrollIntoView({ behavior: 'smooth' });
        }}
      >
        read all reviews
      </h6>
    </div>
  );
};

export default Review;
