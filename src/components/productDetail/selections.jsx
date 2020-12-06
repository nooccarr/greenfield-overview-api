import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import reviewSection from './Default-Review.jsx';

class Selections extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: 0,
      currentStyle: 0,
      currentSku: { quantity: 0, size: null },
      currentSize: '',
      quantity: 0,
      totalPrice: 0,
      status: false,
    };
    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.handleQtyChange = this.handleQtyChange.bind(this);
    this.submitValidation = this.submitValidation.bind(this);
  }
  handleSizeChange(event) {
    this.setState({ currentSize: event.target.value });
  }
  handleQtyChange(event) {
    this.setState({ quantity: event.target.value });
  }
  submitValidation() {
    event.preventDefault();
    this.setState({ status: Boolean(!this.state.currentSize) });
  }
  currentSku(sku) {
    this.setState({ currentSku: sku });
  }
  componentDidUpdate(prevProps) {
    if (prevProps.currentStyle !== this.props.currentStyle) {
      this.setState({ currentSize: '' });
    }
  }
  getStock() {}
  render() {
    if (this.props.currentStyle.skus === undefined) {
      return (
        <div>
          <span>please wait for related product to load</span>
        </div>
      );
    } else {
      let currentStyleSkus = [];
      for (let key in this.props.currentStyle.skus) {
        let sku = {
          quantity: this.props.currentStyle.skus[key],
          size: key
        };
        currentStyleSkus.push(sku);
      }
      return (
        <div className="default-checkout">
          <div className="default-checkout-selections">
            <FormControl variant="outlined" error={this.state.status}>
              <InputLabel id="demo-simple-select-outlined-label">
                Size
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={this.state.currentSize}
                onChange={this.handleSizeChange}
                label="Size"
                style={{ marginRight: '15px', minWidth: '150px' }}
              >
                {currentStyleSkus.map(
                  (sku, index) => {
                    return (
                      <MenuItem
                        value={sku.size}
                        key={index}
                        onClick={() => {
                          this.currentSku(sku);
                        }}
                      >
                        {sku.size}
                      </MenuItem>
                    );
                  }
                )}
              </Select>
              {this.state.status && (
                <FormHelperText>please select size</FormHelperText>
              )}
            </FormControl>
            <FormControl variant="outlined" disabled={!this.state.currentSize}>
              <InputLabel id="demo-simple-select-outlined-label">
                Qty
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                defaultValue={1}
                value={this.state.quantity}
                onChange={this.handleQtyChange}
                onClick={this.submitValidation}
                label="Qty"
                style={{ marginRight: '15px', minWidth: '100px' }}
                displayEmpty={false}
                renderValue={(v) => {
                  return v || 1;
                }}
                disable={true}
              >
                {Array.from(
                  {
                    length:
                      this.state.currentSku.quantity <= 15
                        ? this.state.currentSku.quantity
                        : 15,
                  },
                  (_, i) => i + 1
                ).map((quantity, index) => {
                  return (
                    <MenuItem value={quantity} key={index}>
                      {quantity}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </div>
          <form className="default-checkout-checkoutbtn">
            <button
              className="default-checkout-checkoutbtn-btn"
              onClick={this.submitValidation}
            >
              CHECK OUT
            </button>
          </form>
        </div>
      );
    }
  }
}
export default Selections;
