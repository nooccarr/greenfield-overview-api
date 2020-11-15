import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';



class RelatedProd extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            item: ''
        }
    }

    componentDidMount() {
        axios.get(`http://3.21.164.220/products/${this.props.focus}/styles`)
        .then((response) => {
            console.log('results array', response.data.results[0].photos[0].thumbnail_url)
            this.setState({
                item: response.data
            })
        })
        .catch((err) => {
            console.log(`there was an error fetching styles for related prod:`, this.props.focus)
        })
    }

    render() {
        if (this.state.item === '') {
            return(
                <div>
                    <span>please wait for related product to load</span>
                </div>
            )
        } else {
            return (
                <div>
                    <span>{`Here is related item:${this.state.item.product_id}`}</span>
                    <img src={this.state.item.results[0].photos[0].thumbnail_url}></img>
                </div>
            )
        }
    }
}







export default RelatedProd;