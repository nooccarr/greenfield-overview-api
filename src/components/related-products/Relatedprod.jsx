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
            this.setState({
                item: response.data
            })
            axios.get(`http://3.21.164.220/products/${response.data.product_id}`)
            .then((response) => {
                this.setState({
                    item: this.state.item,
                    name: response.data.name
                })
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
                    <span>{`Product Name:${this.state.name}`}</span>
                    <img src={this.state.item.results[0].photos[0].thumbnail_url}></img>
                </div>
            )
        }
    }
}







export default RelatedProd;