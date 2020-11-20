import React from 'react';
const Description = (props) => {
  return (
    <div className="default-description-container">
      <h5>{props.currentProduct.slogan}</h5>
      <p>{props.currentProduct.description}</p>
    </div>
  );
};

export default Description;
