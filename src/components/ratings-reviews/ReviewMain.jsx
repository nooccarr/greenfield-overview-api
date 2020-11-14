import React, { useState, useEffect } from 'react';
import RatingsAndReviews from './RatingsAndReviews';
import Review from './Reviews';
import findRatingAverage from './Rating-Helpers';

function ReviewMain(props) {
  const [ratingAverage, setRatingAverage] = useState(null);

  // -------------- fetch data from reviews endpoint ---------------------
  useEffect(() => {
    fetch('http://3.21.164.220/reviews?product_id=3')
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // -------------- fetch data from reviews meta endpoint ---------------------
  useEffect(() => {
    fetch('http://3.21.164.220/reviews/meta?product_id=3')
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setRatingAverage(findRatingAverage(result.ratings));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="review-main-container">
      <RatingsAndReviews ratingAverage={ratingAverage} />
      <Review />
    </div>
  );
}

export default ReviewMain;
