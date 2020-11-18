import React from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';
import ArrowBackIosIcon from '@material-ui/icons/ArrowLeft';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowRight';

class DefaultImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  handleImageChange() {
    // while click on one of the thumbnail will change the current image
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
        </div>

        <button
          className="default-current-img-button-left"
          onClick={() => this.nextProperty()}
          disabled={
            this.state.currentIndex === this.props.currentImageSet.length - 1
          }
        >
          <ArrowBackIosIcon />
        </button>

        <button
          className="default-current-img-button-right"
          onClick={() => this.prevProperty()}
          disabled={this.state.currentIndex === 0}
        >
          <ArrowForwardIosIcon />
        </button>
      </div>
    );
  }
}

export default DefaultImage;
