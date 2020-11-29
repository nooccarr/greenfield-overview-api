import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowLeft';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowRight';
import DefaultImgSubSlider from './DefaultImgSubSlider.jsx';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';

class ExpandView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="default-expand-image-container">
        <DefaultImgSubSlider
          subSliderImgs={this.props.currentImageSet}
          currentMainIndex={this.props.mainSliderIndex}
          currentSubIndex={this.props.subSliderIndex}
          handleMainImageChange={this.props.setMainIndex}
          prevSub={this.props.prevSub}
          nextSub={this.props.nextSub}
          activeIndex={this.props.activeIndex}
        />
        <button
          className="default-expand-current-img-button-left"
          onClick={() => this.props.prevMain()}
          disabled={this.props.mainSliderIndex === 0}
        >
          <ArrowBackIosIcon />
        </button>
        <div className="default-expand-active-image">
          <div
            className="default-expand-current-img"
            style={{
              transform: `translateX(-${this.props.mainSliderIndex * 660}px)`,
            }}
          >
            {this.props.currentImageSet.map((photo, index) => {
              return (
                <img
                  src={photo.url}
                  key={index}
                  style={{
                    height: `100%`,
                    width: `660px`,
                  }}
                />
              );
            })}
          </div>
        </div>
        <button
          className="default-expand-current-img-button-right"
          onClick={() => this.props.nextMain()}
          disabled={
            this.props.mainSliderIndex === this.props.currentImageSet.length - 1
          }
        >
          <ArrowForwardIosIcon />
        </button>
        <button
          className="default-expand-changView-btn"
          onClick={() => {
            this.props.changeExpandView();
            document.getElementById('default-product-info').style.display =
              'block';
          }}
        >
          <AspectRatioIcon />
        </button>
      </div>
    );
  }
}

export default ExpandView;
