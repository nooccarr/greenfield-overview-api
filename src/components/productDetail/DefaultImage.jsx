import React from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';

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
        <button
          onClick={() => this.nextProperty()}
          disabled={
            this.state.currentIndex === this.props.currentImageSet.length - 1
          }
        >
          Next
        </button>
        <button
          onClick={() => this.prevProperty()}
          disabled={this.state.currentIndex === 0}
        >
          Prev
        </button>
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
      </div>
    );
  }
}

export default DefaultImage;
