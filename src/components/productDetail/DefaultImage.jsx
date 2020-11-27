import React from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';
import ArrowBackIosIcon from '@material-ui/icons/ArrowLeft';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowRight';
import DefaultImgSubSlider from './DefaultImgSubSlider.jsx';

class DefaultImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
    // this.handleImageChange = this.handleImageChange.bind(this);
    // this.nextProperty = this.nextProperty.bind(this);
    // this.prevProperty = this.prevProperty.bind(this);
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
      </div>
    );
  }
}

export default DefaultImage;
