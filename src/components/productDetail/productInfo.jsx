import React, { useState, useEffect } from 'react';
import Style from './style.jsx';
import Review from './Default-Review.jsx';
import TitleAndPrice from './TitleAndPrice.jsx';
import Selections from './selections.jsx';
import {
  findRatingAverage,
  findRecommendPercent,
  getRatingPercentages,
} from '../ratings-reviews/Rating-Helpers';

const ProductInfo = (props) => {
  const [ratingAverage, setRatingAverage] = useState(null);

  useEffect(() => {
    fetch(`http://3.21.164.220/reviews/meta?product_id=${props.productId}`)
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
    <div className="default-product-info">
      <Review ratingAverage={ratingAverage} />

      <TitleAndPrice currentProduct={props.currentProduct} />
      <Style
        currentProductStyles={props.currentProductStyles}
        handleStyleChange={props.handleStyleChange}
        setMainIndex={props.setMainIndex}
        setSubIndex={props.setSubIndex}
      />
      <Selections
        currentProduct={props.currentProduct}
        currentProductStyles={props.currentProductStyles}
      />
    </div>
  );
};

export default ProductInfo;
