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
    this.handleImageChange = this.handleImageChange.bind(this);
    this.nextProperty = this.nextProperty.bind(this);
    this.prevProperty = this.prevProperty.bind(this);
  }

  handleImageChange(index) {
    // while click on one of the thumbnail will change the current image
    this.setState({ currentIndex: index });
  }
  nextProperty() {
    this.setState({ currentIndex: this.state.currentIndex + 1 });
  }

  prevProperty() {
    this.setState({ currentIndex: this.state.currentIndex - 1 });
  }

  render() {
    return (
      <div className="default-image-container">
        <DefaultImgSubSlider
          subSliderImgs={this.props.currentImageSet}
          currentIndex={this.state.currentIndex}
          handleImageChange={this.handleImageChange}
        />
        <div className="default-active-image">
          <div
            className="default-current-img"
            style={{
              transform: `translateX(-${this.state.currentIndex * 550}px)`,
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
            onClick={() => this.prevProperty()}
            disabled={this.state.currentIndex === 0}
          >
            <ArrowForwardIosIcon />
          </button>
          <button
            className="default-current-img-button-left"
            onClick={() => this.nextProperty()}
            disabled={
              this.state.currentIndex === this.props.currentImageSet.length - 1
            }
          >
            <ArrowBackIosIcon />
          </button>
        </div>
      </div>
    );
  }
}

export default DefaultImage;
