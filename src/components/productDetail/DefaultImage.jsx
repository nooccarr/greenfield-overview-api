import React from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';

class DefaultImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: props.currentStyle.photos[0].url,
    };
  }

  handleImageChange() {
    // while click on one of the thumbnail will change the current image
  }

  render() {
    return (
      <div className="default-image-container">
        <Carousel>
          {this.props.currentStyle.photos.map((photo, index) => {
            return (
              <Carousel.Item>
                <img
                  src={photo.url}
                  key={index}
                  style={{ height: `100%`, width: `100%` }}
                />
              </Carousel.Item>
            );
          })}
          {/* <ol className="carousel-indicators">
            {this.props.currentStyle.photos.map((photo, index) => {
              return (
                <li key={index} onClick={() => this.goToIndex(index)}>
                  <img
                    src={photo.thumbnail_url}
                    style={{ height: `100%`, width: `100%` }}
                  />
                </li>
              );
            })}
          </ol> */}
        </Carousel>
      </div>
    );
  }
}

export default DefaultImage;
