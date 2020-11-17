import React from 'react';
import RelatedProd from './Relatedprod';
import { render } from 'react-dom';


class Related extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            start: 0,
            end: 3
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        if (e.target.id === 'rightBut' && this.state.end < this.props.related.length) {
            this.setState({
                start: this.state.start+1,
                end: this.state.end+1
            })
        }
        if (e.target.id === 'leftBut' && this.state.start > 0) {
            this.setState({
                start: this.state.start-1,
                end: this.state.end-1
            })
        }
    }
    

    render() {
        var related = this.props.related.slice(this.state.start, this.state.end)
        return (
        <div>
        <h3>RELATED PRODUCTS</h3>
            <div className='related-carousel'>
                {related.map((item, index) => {
                    return (
                        <div key={index}>
                            <RelatedProd focus={item}/>
                        </div>
                    )
                })}
            </div>
            <button className='carouselArrow carouselLeft' id='leftBut' onClick={(e) => {this.handleClick(e)}}></button><button className='carouselArrow carouselRight' id='rightBut' onClick={(e) => {this.handleClick(e)}}></button>
        </div>
        )
    }
}



export default Related;
