import React from 'react';

const Style = (props) => {
  return (
    <div className="default-styles">
      <h3>Please choose styles</h3>
      <ul>
        {props.currentProductStyles.map((style, index) => {
          return (
            <img
              className="default-styles-img"
              src={style.photos[0].thumbnail_url}
              key={index}
              onClick={() => props.handleStyleChange(style)}
            ></img>
          );
        })}
      </ul>
    </div>
  );
};

export default Style;
