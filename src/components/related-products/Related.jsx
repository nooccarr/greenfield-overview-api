import React from 'react';
import RelatedProd from './Relatedprod';
import Modal from './Modal';

class Related extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ref: 0,
            modal: false
        }

        this.modalOn = this.modalOn.bind(this)
        this.modalOff = this.modalOff.bind(this)
        
    }

    myRef = React.createRef();
    

    rightClick() {
        const slide = this.myRef.current
        slide.scrollLeft += 330
        this.setState({
            ref: this.state.ref+=330,
            modal: this.state.modal
        })
        // if(slide.scrollLeft >= (slide.scrollWidth - slide.offsetWidth)) {
        //     slide.scrollLeft = 0
        // }
    }

    leftClick() {
        const slide = this.myRef.current
        slide.scrollLeft -= 330
        this.setState({
            ref: this.state.ref-=330,
            modal: this.state.modal
        })
        // if(slide.scrollLeft <= 0) {
        //     slide.scrollLeft = slide.offsetWidth
        // }
    }

    displayModal() {
        if (this.state.modal === true) {
            return (
                <div >
                <Modal modalOff={this.modalOff} name={this.state.relateName} focusFeatures={this.state.focusFeatures} currentFeat={this.props.currentFeat} curName={this.props.curName}/>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }

    modalOn(name, focusFeatures) {
        this.setState({
            ref: this.state.ref,
            modal: true,
            relateName: name,
            focusFeatures: focusFeatures
        })
    }

    modalOff() {
        this.setState({
            ref: this.state.ref,
            modal: false
        })
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
        if(this.state.ref >= checker || this.props.related.length <= 3 || this.props.related.length === 4 && this.state.ref >= 320 || this.props.related.length === 5 && this.state.ref >= 600) {
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
                            <RelatedProd focus={item} modalOn={this.modalOn} changeCurrent={this.props.changeCurrent} currentFeat={this.props.currentFeat}/>
                        </div>
                    )
                })}
            </div>
            <div className='row'>
            {this.leftButton()}{this.rightButton()}{this.displayModal()}
            </div>
        </div>
        )
    }
}

export default Related;