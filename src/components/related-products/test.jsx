import React from 'react';
import RelatedProd from './Relatedprod';

class Related extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    leftButton() {
        if (this.state.start !== 0) {
            return (
                <button className='carouselArrow carouselLeft' id='leftBut' onClick={(e) => {this.handleClick(e)}}></button>
            )
        } else {
            return (
                <button className='carouselHide' id='leftBut' onClick={(e) => {this.handleClick(e)}}></button>
            )
        }

    }

    rightButton() {
        if (this.state.end < this.props.related.length) {
            return (
                <button className='carouselArrow carouselRight' id='rightBut' onClick={(e) => {this.handleClick(e)}}></button>
            )
        }
    }




    render() {
        return (
        <div className='wrapper'>
        <h3>RELATED PRODUCTS</h3>
            <div className='related-carousel'>
                {this.props.related.map((item, index) => {
                    return (
                        <div key={index}>
                            <RelatedProd focus={item}/>
                        </div>
                    )
                })}
            </div>
            <div className='row'>
            {this.leftButton()}{this.rightButton()}
            </div>
        </div>
        )
    }
}

export default Related;