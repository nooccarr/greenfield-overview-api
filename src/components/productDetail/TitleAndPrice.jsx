import React from 'react';

const TitleAndPrice = (props) => {
  return (
    <div className="default-title">
      <h5>{props.currentProduct.category}</h5>
      <h1>{props.currentProduct.name}</h1>
      {props.currentStyle.sale_price === '0' ? (
        <span>{`$${props.currentStyle.original_price}`}</span>
      ) : (
        <>
          <span
            style={{ textDecorationLine: 'line-through', display: 'block' }}
          >{`$${props.currentStyle.original_price}`}</span>
          <span
            style={{ color: 'red', display: 'block' }}
          >{`$${props.currentStyle.sale_price}`}</span>
        </>
      )}
    </div>
  );
};

export default TitleAndPrice;
