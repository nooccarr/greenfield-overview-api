import React from 'react';
import DefaultImage from './DefaultImage.jsx';
import ProductInfo from './productInfo.jsx';
import Style from './style.jsx';
import Selections from './selections.jsx';
import Description from './description.jsx';
import Review from './Review.jsx';
import axios from 'axios';

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProductId: 1,
      currentProduct: {},
      currentStyle: {},
    };
  }
  fetchProduct() {
    return axios
      .get(`http://3.21.164.220/products/${this.state.currentProductId}`)
      .then((product) => {
        this.getCurrentProdcut(product);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  fetchStyle() {
    return axios
      .get(`http://3.21.164.220/products/${this.state.currentProductId}/style`)
      .then((style) => {
        this.getCurrentStyle(style);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getCurrentProdcut(product) {
    this.setState({ currentProduct: product });
  }

  getCurrentStyle(style) {
    this.setState({ currentStyle: style });
  }

  componentDidMont() {
    this.fetchProduct();
    this.fetchStyle();
  }
  render() {
    return (
      <div>
        <ProductImage
          currentProduct={this.state.currentProduct}
          currentStyle={this.state.currentStyle}
        />
        <review />
        <ProductInfo
          currentProduct={this.state.currentProduct}
          currentStyle={this.state.currentStyle}
          productId={this.state.currentProductId}
        />
        <Style
          currentProduct={this.state.currentProduct}
          currentStyle={this.state.currentStyle}
        />
        <Selections
          currentProduct={this.state.currentProduct}
          currentStyle={this.state.currentStyle}
        />
        <Description
          currentProduct={this.state.currentProduct}
          currentStyle={this.state.currentStyle}
        />
      </div>
    );
  }
}

export default Detail;
