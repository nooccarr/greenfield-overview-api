import React from 'react';

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
      <div>
        <img src={this.props.currentStyle.photos[0].url}></img>
        <div>
          {
            // thumbnails
            // each thumbnail should be able to toggle and handle click
          }
        </div>
      </div>
    );
  }
}

export default DefaultImage;
