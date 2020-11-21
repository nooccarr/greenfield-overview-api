import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

class Selections extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: 0,
      currentStyle: 0,
      sku_id: 0,
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
  render() {
    return (
      <div className="default-checkout">
        <div className="default-checkout-selections">
          <FormControl variant="outlined" error={this.state.status}>
            <InputLabel id="demo-simple-select-outlined-label">Size</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={this.state.currentSize}
              onChange={this.handleSizeChange}
              label="Size"
              style={{ marginRight: '15px', minWidth: '150px' }}
            >
              <MenuItem value={'XS'}>XS</MenuItem>
              <MenuItem value={'S'}>S</MenuItem>
              <MenuItem value={'M'}>M</MenuItem>
              <MenuItem value={'L'}>L</MenuItem>
              <MenuItem value={'XL'}>XL</MenuItem>
            </Select>
            {this.state.status && (
              <FormHelperText>please select size</FormHelperText>
            )}
          </FormControl>
          <FormControl variant="outlined">
            <InputLabel id="demo-simple-select-outlined-label">Qty</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={this.state.quantity}
              onChange={this.handleQtyChange}
              label="Qty"
              style={{ marginRight: '15px', minWidth: '100px' }}
              displayEmpty={false}
              renderValue={(v) => {
                return 1;
              }}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
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
export default Selections;
