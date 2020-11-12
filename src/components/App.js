
import React from "react";
import { hot } from 'react-hot-loader/root';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Review from './ratings-reviews/Review'

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <Review />
      </div>
    );
  }
}

export default hot(App);
