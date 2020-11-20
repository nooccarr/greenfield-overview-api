import React from 'react';
import Related from './Related';
import Outfit from './Outfit';
import axios from 'axios';

class RelatedOutfit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            related: [],
            outfit: []
        }


    }



    // current Item will need to be handed down by props
    componentDidMount() {
        axios.get(`http://3.21.164.220/products/${this.props.current}/related`)
        .then((response) => {
            var removeDups = (arr) => {
                var memory = {}
                for (var i = 0; i < arr.length; i++) {
                    if (memory[arr[i]] === undefined) {
                        memory[arr[i]] = 1
                    } else {
                        continue;
                    }
                }
                return Object.keys(memory)
            }
            var related = response.data
            this.setState({
                related: removeDups(related),
                outfit: this.state.outfit
            })     
        })
        .then(() => {
            axios.get(`http://3.21.164.220/products/${this.props.current}`)
            .then((response) => {
                this.setState({
                    related: this.state.related,
                    outfit: this.state.outfit,
                    currentFeat: response.data.features,
                    curName: response.data.name
                })
            })
        })
        .catch((err) => {
            console.log('there was an error getting related products', err)
        })
    }








    render() {
        return (
            <div>
                <Related related={this.state.related} changeCurrent={this.props.changeCurrent} currentFeat={this.state.currentFeat} curName={this.state.curName}/>
                <Outfit/>
            </div>
        )
    }


}

export default RelatedOutfit;