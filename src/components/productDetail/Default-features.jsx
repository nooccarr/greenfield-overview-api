import React from 'react';

const Features = (props) => {
  // API data acting weird...

  console.log('this is features: ', props.currentProduct.features);
  if (props.currentProduct.features === undefined) {
    return (
      <div>
        <span>please wait for related product to load</span>
      </div>
    );
  } else {
    return (
      <div className="default-features-container">
        <ul className="default-features-container-list">
          {props.currentProduct.features.map((item, index) => {
            return (
              <li key={index}>
                {item.feature}: {item.value}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

export default Features;
