import React from 'react';
import RelatedProd from './Relatedprod';

class Related extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        
    }

    myRef = React.createRef();

    rightClick() {
        console.log(this.myRef.current)
        var slide = this.myRef.current
        slide.scrollRight += 200
    }

    leftClick() {
        var slide = this.myRef.current
        slide.scrollLeft -= 200
    }


    leftButton() {
            return (
                <button className='carouselArrow carouselLeft' id='leftBut' onClick={() => {this.leftClick()}}></button>
            )
        
    }

    rightButton() {
            return (
                <button className='carouselArrow carouselRight' id='rightBut' onClick={() => {this.rightClick()}}></button>
            )
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