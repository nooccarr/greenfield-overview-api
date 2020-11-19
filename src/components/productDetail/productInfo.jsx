import React from 'react';
import Style from './style.jsx';
import Selections from './selections.jsx';

const ProductInfo = (props) => {
  return (
    <div className="default-product-info">
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
