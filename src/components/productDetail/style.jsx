import React, { useRef } from 'react';
import { reviewSection } from './Default-Review.jsx';

const Style = (props) => {
  const setIndex = () => {
    props.setMainIndex(0);
    props.setSubIndex(0);
  };
  return (
    <div className="default-styles" ref={reviewSection}>
      <h5>STYLE > SELECTED STYLE</h5>
      <ul>
        {props.currentProductStyles.map((style, index) => {
          const className =
            props.activeStyleIndex === index
              ? 'default-styles-img-active'
              : 'default-styles-img';
          return (
            <img
              className={className}
              src={style.photos[0].thumbnail_url}
              key={index}
              onClick={() => {
                props.handleStyleChange(style);
                props.handleStyleActiveChange(index);
                setIndex();
              }}
            ></img>
          );
        })}
      </ul>
    </div>
  );
};

export default Style;
