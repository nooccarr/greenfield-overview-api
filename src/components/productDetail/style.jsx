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
          return (
            <img
              className="default-styles-img"
              src={style.photos[0].thumbnail_url}
              key={index}
              onClick={() => {
                props.handleStyleChange(style);
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
