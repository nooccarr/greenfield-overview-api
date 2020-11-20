import React from 'react';
import { hot } from 'react-hot-loader/root';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReviewMain from './ratings-reviews/ReviewMain';
import Related from './related-products/index.jsx';
import Detail from './productDetail/index.jsx';
import SearchIcon from '@material-ui/icons/Search';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      current: 1,
    };
    this.changeCurrent = this.changeCurrent.bind(this);
  }

  changeCurrent(id) {
    console.log(id)
    this.setState({
      current: id,
    });
  }

  render() {
    return (
      <div>
        <header>
          <h1 class="main-logo">DANGO</h1>
          <div class="search-wrap">
            <input
              type="text"
              class="search"
              placeholder="What are you looking for?"
            />
            <button type="submit" class="searchButton">
              <SearchIcon />
            </button>
          </div>

          <hr class="header-break"></hr>
        </header>
        <div className="container">
          <Detail current={this.state.current} />
          <Related
            current={this.state.current}
            changeCurrent={this.changeCurrent}
          />
          <ReviewMain current={this.state.current} />
        </div>
      </div>
    );
  }
}

export default hot(App);
