import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowLeft';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowRight';
import DefaultImgSubSlider from './DefaultImgSubSlider.jsx';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';

class DefaultImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="default-image-container">
        <DefaultImgSubSlider
          subSliderImgs={this.props.currentImageSet}
          currentMainIndex={this.props.mainSliderIndex}
          currentSubIndex={this.props.subSliderIndex}
          handleMainImageChange={this.props.setMainIndex}
          prevSub={this.props.prevSub}
          nextSub={this.props.nextSub}
          activeIndex={this.props.activeIndex}
        />
        <div className="default-active-image">
          <div
            className="default-current-img"
            style={{
              transform: `translateX(-${this.props.mainSliderIndex * 550}px)`,
            }}
          >
            {this.props.currentImageSet.map((photo, index) => {
              return (
                <img
                  src={photo.url}
                  key={index}
                  style={{ height: `100%`, width: `100%` }}
                />
              );
            })}
          </div>
          <button
            className="default-current-img-button-right"
            onClick={() => this.props.nextMain()}
            disabled={
              this.props.mainSliderIndex ===
              this.props.currentImageSet.length - 1
            }
          >
            <ArrowForwardIosIcon />
          </button>
          <button
            className="default-current-img-button-left"
            onClick={() => this.props.prevMain()}
            disabled={this.props.mainSliderIndex === 0}
          >
            <ArrowBackIosIcon />
          </button>
        </div>
        <button
          className="default-expand-changView-btn"
          onClick={() => {
            this.props.changeExpandView();
            document.getElementById('default-product-info').style.display =
              'none';
          }}
        >
          <AspectRatioIcon />
        </button>
      </div>
    );
  }
}

export default DefaultImage;
