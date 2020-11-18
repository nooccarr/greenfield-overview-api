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
      currentProductId: 3,
      currentProduct: {},
      currentProductStyles: [],
      currentStyle: {
        style_id: 1,
        name: 'Forest Green & Black',
        original_price: '140',
        sale_price: '0',
        'default?': 1,
        photos: [
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
          },
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80',
          },
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80',
          },
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
          },
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
          },
          {
            thumbnail_url:
              'https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
            url:
              'https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
          },
        ],
        skus: {
          1: {
            quantity: 8,
            size: 'XS',
          },
          2: {
            quantity: 16,
            size: 'S',
          },
          3: {
            quantity: 17,
            size: 'M',
          },
          4: {
            quantity: 10,
            size: 'L',
          },
          5: {
            quantity: 15,
            size: 'XL',
          },
          6: {
            quantity: 4,
            size: 'XL',
          },
        },
      },
      currentImageSet: [
        {
          thumbnail_url:
            'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url:
            'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        },
        {
          thumbnail_url:
            'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url:
            'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80',
        },
        {
          thumbnail_url:
            'https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url:
            'https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80',
        },
        {
          thumbnail_url:
            'https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          url:
            'https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
        },
        {
          thumbnail_url:
            'https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url:
            'https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        },
        {
          thumbnail_url:
            'https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url:
            'https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        },
      ],
      currentImage: '',
    };
    this.handleStyleChange = this.handleStyleChange.bind(this);
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
      .get(`http://3.21.164.220/products/${this.state.currentProductId}/styles`)
      .then((styles) => {
        this.getCurrentStyle(styles.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getCurrentProdcut(product) {
    this.setState({ currentProduct: product });
  }

  getCurrentStyle(styles) {
    this.setState({ currentProductStyles: styles });
    this.setState({ currentStyle: styles[0] });
    this.setState({ currentImageSet: styles[0].photos });
    this.setState({ currentImage: styles[0].photos[0].url });
  }

  handleStyleChange(style) {
    this.setState({ currentStyle: style });
    this.setState({ currentImageSet: style.photos });
    this.setState({ currentImage: style.photos[0].url });
  }

  componentWillMount() {
    this.fetchProduct();
    this.fetchStyle();
  }

  render() {
    return (
      <div className="default-container">
        <DefaultImage
          currentImageSet={this.state.currentImageSet}
          currentImage={this.state.currentImage}
        />

        <ProductInfo
          currentProduct={this.state.currentProduct}
          currentProductStyles={this.state.currentProductStyles}
          productId={this.state.currentProductId}
          handleStyleChange={this.handleStyleChange}
        />

        <Description
          currentProduct={this.state.currentProduct}
          currentProductStyles={this.state.currentProductStyles}
        />
      </div>
    );
  }
}

export default Detail;
