import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import Stars from '../ratings-reviews/Stars.jsx';
import { colors } from '@material-ui/core';
import Modal from './Modal'



class RelatedProd extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            item: ''
        }
        this.toggleModal = this.toggleModal.bind(this)
    }

    displayPrice() {
        if(this.state.item.results[0].sale_price === '0') {
            return (
                <p className='cardText'>${this.state.price}</p>
            )
        } else {
            return (
                <div>
                    <p className='cardText' style={{color: 'red'}}>${this.state.item.results[0].sale_price}<strike className='cardText' style={{color: 'black'}}>${this.state.price}</strike></p>
                </div>
            )
        }
    }


    componentDidUpdate(prevProps) {
        if (prevProps.focus !== this.props.focus) {
            this.getInfo()
        }
    }

    componentDidMount() {
        this.getInfo()
    }

    // displayModal() {
    //     if (this.state.modal === true) {
    //         return (
    //             <div>
    //             <Modal toggleModal={this.toggleModal}/>
    //             </div>
    //         )
    //     } else {
    //         return (
    //             <div></div>
    //         )
    //     }
    // }

    toggleModal() {
        if (this.state.modal === false) {
            this.setState({
                item: this.state.item,
                name: this.state.name,
                cat: this.state.cat,
                price: this.state.price,
                rate: this.state.rate,
                modal: true
            })
        } else if (this.state.modal === true) {
            this.setState({
                item: this.state.item,
                name: this.state.name,
                cat: this.state.cat,
                price: this.state.price,
                rate: this.state.rate,
                modal: false
            })
        }
    }


    getInfo () {
        axios.get(`http://3.21.164.220/products/${this.props.focus}/styles`)
        .then((response) => {
            this.setState({
                item: response.data,
            })
            axios.get(`http://3.21.164.220/products/${response.data.product_id}`)
            .then((response) => {
                this.setState({
                    item: this.state.item,
                    name: response.data.name,
                    cat: response.data.category,
                    price: response.data.default_price,
                    focusFeatures: response.data.features
                })
            })
            .then(() => {
                axios.get(`http://3.21.164.220/reviews/meta?product_id=${response.data.product_id}`)
                .then((response) => {
                    this.setState({
                        item: this.state.item,
                        name: this.state.name,
                        cat: this.state.cat,
                        price: this.state.price,
                        focusFeatures: this.state.focusFeatures,
                        rate: Stars(response.data),
                        modal: false
                    })
                })
            })
        })
        .catch((err) => {
            console.log(`there was an error fetching styles for related prod:`, this.props.focus, err)
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
                <div className='card' style={{width: '18rem'}}>
                    <img src={this.state.item.results[0].photos[0].thumbnail_url} className='relatedImg' onClick={() => {this.props.changeCurrent(this.props.focus)}}></img>
                    <div className='container'></div>
                        <h6 className='cardText'>{this.state.cat}</h6>
                        <h5 className='cardName'><h4 className='starBut' onClick={() => {this.props.modalOn(this.state.name, this.state.focusFeatures)}}>☆</h4><b>{this.state.name}</b></h5>
                        {this.displayPrice()}
                        <p className='cardText'>{this.state.rate}</p>
                </div>
                </div>
            )
        }
    }
}







export default RelatedProd;