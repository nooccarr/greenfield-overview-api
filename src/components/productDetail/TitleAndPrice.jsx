import React from 'react';

const TitleAndPrice = (props) => {
  return (
    <div className="default-title">
      <h5>{props.currentProduct.category}</h5>
      <h1>{props.currentProduct.name}</h1>
      <span>{`$${props.currentProduct.default_price}`}</span>
    </div>
  );
};

export default TitleAndPrice;
