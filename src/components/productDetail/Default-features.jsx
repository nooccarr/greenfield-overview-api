import React from 'react';

const Features = (props) => {
  // API data acting weird...
  console.log('this is features: ', props.currentProduct.slogan);
  return (
    <div className="default-features-container">
      <ul className="default-features-container-list">
        <li>{props.currentProduct.slogan}</li>
      </ul>
    </div>
  );
};

export default Features;
