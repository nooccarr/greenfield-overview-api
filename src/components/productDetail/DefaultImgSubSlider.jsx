import React from 'react';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
const defaultImgSubSlider = (props) => {
  return (
    <div className="default-subslider-container">
      <button className="default-subslider-btn-top">
        <ArrowDropUpIcon />
      </button>
      <div className="default-subslider-img-container">
        {props.subSliderImgs.map((photo, index) => {
          return (
            <img
              className="default-subslider-img"
              src={photo.thumbnail_url}
              key={index}
              onClick={() => {
                props.handleImageChange(index);
              }}
            />
          );
        })}
      </div>
      <button className="default-subslider-btn-bottom">
        <ArrowDropDownIcon />
      </button>
    </div>
  );
};
export default defaultImgSubSlider;
