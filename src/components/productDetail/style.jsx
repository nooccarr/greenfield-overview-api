import React from 'react';

const Style = (props) => {
  return (
    <div>
      This is styles
      <ul>
        {props.currentProductStyles.map((style, index) => {
          return (
            <li>
              <img
                src={style.photos[0].thumbnail_url}
                key={index}
                onClick={() => props.handleStyleChange(style)}
              ></img>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Style;
