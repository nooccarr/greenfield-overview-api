import React from 'react';
import Style from './style.jsx';
import Selections from './selections.jsx';

const ProductInfo = (props) => {
  return (
    <div className="default-product-info">
      <Style
        currentProductStyles={props.currentProductStyles}
        handleStyleChange={props.handleStyleChange}
      />
      <Selections
        currentProduct={props.currentProduct}
        currentProductStyles={props.currentProductStyles}
      />
    </div>
  );
};

export default ProductInfo;
