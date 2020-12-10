import React from 'react';
import DefaultImage from './DefaultImage.jsx';
import ExpandView from './expandView.jsx';
import ProductInfo from './productInfo.jsx';
import Style from './style.jsx';
import Selections from './selections.jsx';
import Description from './description.jsx';
import Review from './Default-Review.jsx';
import Features from './Default-features.jsx';
import axios from 'axios';

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainSliderIndex: 0,
      subSliderIndex: 0,
      activeIndex: 0,
      activeStyleIndex: 0,
      isExpandView: false,
      currentProduct: {},
      currentProductStyles: [],
      currentStyle: {},
      currentImageSet: [],
      currentImage: '',
    };
    this.handleStyleChange = this.handleStyleChange.bind(this);
    this.setMainIndex = this.setMainIndex.bind(this);
    this.setSubIndex = this.setSubIndex.bind(this);
    this.nextMain = this.nextMain.bind(this);
    this.prevMain = this.prevMain.bind(this);
    this.nextSub = this.nextSub.bind(this);
    this.prevSub = this.prevSub.bind(this);
    this.handleStyleActiveChange = this.handleStyleActiveChange.bind(this);
    this.changeExpandView = this.changeExpandView.bind(this);
  }
  changeExpandView() {
    this.setState({ isExpandView: !this.state.isExpandView });
  }
  setMainIndex(num) {
    this.setState({ mainSliderIndex: num });
    this.setState({ activeIndex: num });
  }
  setSubIndex(num) {
    this.setState({ subSliderIndex: num });
  }
  fetchProduct() {
    return axios
      .get(`http://3.129.44.47/products/${this.props.current}`)
      .then((product) => {
        this.getCurrentProdcut(product.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  fetchStyle() {
    return axios
      .get(`http://3.129.44.47/products/${this.props.current}/styles`)
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

  componentDidUpdate(prevProps) {
    if (prevProps.current !== this.props.current) {
      this.fetchProduct();
      this.fetchStyle();
      this.setMainIndex(0);
      this.setSubIndex(0);
      this.setState({ isExpandView: false });
    }
  }

  nextMain() {
    this.setState({ mainSliderIndex: this.state.mainSliderIndex + 1 });
    this.setState({ activeIndex: this.state.activeIndex + 1 });
  }

  prevMain() {
    this.setState({ mainSliderIndex: this.state.mainSliderIndex - 1 });
    this.setState({ activeIndex: this.state.activeIndex - 1 });
  }

  nextSub() {
    this.setState({ subSliderIndex: this.state.subSliderIndex + 1 });
  }

  prevSub() {
    this.setState({ subSliderIndex: this.state.subSliderIndex - 1 });
  }
  handleStyleActiveChange(num) {
    this.setState({ activeStyleIndex: num });
  }
  render() {
    return (
      <div className="default-container">
        {this.state.isExpandView ? (
          <ExpandView
            currentImageSet={this.state.currentImageSet}
            currentImage={this.state.currentImage}
            mainSliderIndex={this.state.mainSliderIndex}
            subSliderIndex={this.state.subSliderIndex}
            setMainIndex={this.setMainIndex}
            setSubIndex={this.setSubIndex}
            prevMain={this.prevMain}
            nextMain={this.nextMain}
            prevSub={this.prevSub}
            nextSub={this.nextSub}
            activeIndex={this.state.activeIndex}
            changeExpandView={this.changeExpandView}
          />
        ) : (
          <DefaultImage
            currentImageSet={this.state.currentImageSet}
            currentImage={this.state.currentImage}
            mainSliderIndex={this.state.mainSliderIndex}
            subSliderIndex={this.state.subSliderIndex}
            setMainIndex={this.setMainIndex}
            setSubIndex={this.setSubIndex}
            prevMain={this.prevMain}
            nextMain={this.nextMain}
            prevSub={this.prevSub}
            nextSub={this.nextSub}
            activeIndex={this.state.activeIndex}
            changeExpandView={this.changeExpandView}
          />
        )}

        <ProductInfo
          currentProduct={this.state.currentProduct}
          currentProductStyles={this.state.currentProductStyles}
          currentStyle={this.state.currentStyle}
          productId={this.props.current}
          handleStyleChange={this.handleStyleChange}
          mainSliderIndex={this.state.mainSliderIndex}
          subSliderIndex={this.state.subSliderIndex}
          setMainIndex={this.setMainIndex}
          setSubIndex={this.setSubIndex}
          activeStyleIndex={this.state.activeStyleIndex}
          handleStyleActiveChange={this.handleStyleActiveChange}
        />

        <Description
          currentProduct={this.state.currentProduct}
          currentProductStyles={this.state.currentProductStyles}
        />

        <Features currentProduct={this.state.currentProduct} />
      </div>
    );
  }
}

export default Detail;
