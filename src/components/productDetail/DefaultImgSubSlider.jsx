import React from 'react';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
class DefaultImgSubSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subIndex: 0,
    };
  }

  render() {
    return (
      <div className="default-subslider-container">
        <button
          className="default-subslider-btn-top"
          onClick={() => this.props.prevSub()}
          disabled={this.props.currentSubIndex === 0}
        >
          <ArrowDropUpIcon />
        </button>
        <div className="default-subslider-img-container">
          <div
            className="default-subslider-img-active"
            style={{
              transform: `translateY(-${this.props.currentSubIndex * 210}px)`,
            }}
          >
            {this.props.subSliderImgs.map((photo, index) => {
              return (
                <img
                  className="default-subslider-img"
                  src={photo.thumbnail_url}
                  key={index}
                  onClick={() => {
                    this.props.handleMainImageChange(index);
                  }}
                />
              );
            })}
          </div>
        </div>
        <button
          className="default-subslider-btn-bottom"
          onClick={() => this.props.nextSub()}
          disabled={
            this.props.currentSubIndex > this.props.subSliderImgs.length - 4
          }
        >
          <ArrowDropDownIcon />
        </button>
      </div>
    );
  }
}
export default DefaultImgSubSlider;
