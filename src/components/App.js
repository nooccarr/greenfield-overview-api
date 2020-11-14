import React from 'react';
import { hot } from 'react-hot-loader/root';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReviewMain from './ratings-reviews/ReviewMain';
import Related from './related-products/index.jsx';
import Detail from './productDetail/index.jsx';

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <div className="container">
          <Detail />
          <Related />
          <ReviewMain />
        </div>
      </div>
    );
  }
}

export default hot(App);
