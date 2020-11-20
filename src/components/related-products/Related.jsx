import React from 'react';
import RelatedProd from './Relatedprod';

class Related extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ref: 0
        }
        
    }

    myRef = React.createRef();

    rightClick() {
        const slide = this.myRef.current
        slide.scrollLeft += 330
        this.setState({
            ref: this.state.ref+=330
        })
        // if(slide.scrollLeft >= (slide.scrollWidth - slide.offsetWidth)) {
        //     slide.scrollLeft = 0
        // }
    }

    leftClick() {
        const slide = this.myRef.current
        slide.scrollLeft -= 330
        this.setState({
            ref: this.state.ref-=330
        })
        // if(slide.scrollLeft <= 0) {
        //     slide.scrollLeft = slide.offsetWidth
        // }
    }


    leftButton() {
        if(this.state.ref <= 0) {
            return (
                <button className='carouselHide' id='leftBut' onClick={() => {this.leftClick()}}></button>
            )
        } else {
            return (
                <button className='carouselArrow carouselLeft' id='leftBut' onClick={() => {this.leftClick()}}></button>
            )
        }
    }

    rightButton() {
        var checker = (this.props.related.length * 141.3)
        if(this.state.ref >= checker || this.props.related.length <= 3) {
            return (
                <button className='carouselHide' id='rightBut' onClick={() => {this.rightClick()}}></button>
            )
        } else {
            return (
                <button className='carouselArrow carouselRight' id='rightBut' onClick={() => {this.rightClick()}}></button>
            )
        }
    }




    render() {
        return (
        <div className='wrapper'>
        <h3>RELATED PRODUCTS</h3>
            <div className='related-carousel' ref={this.myRef}>
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