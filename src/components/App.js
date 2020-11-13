
import React from "react";
import { hot } from 'react-hot-loader/root';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Review from './ratings-reviews/Review';
import Related from './related-products/index.jsx';

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <div className="container">
          <Related />
          <Review />
        </div>
      </div>
    );
  }
}

export default hot(App);
