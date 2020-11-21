import React from 'react';
import OutfitProd from './Outfitprod';

// const Outfit = (props) => (
//     <div>
//         <h3>YOUR OUTFIT</h3>
//         <OutfitProd/>
//     </div>
// )

// export default Outfit;

class Outfit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ref:0
        }

        this.removeFromOutfit = this.removeFromOutfit.bind(this)
        this.outfitUpdate = this.outfitUpdate.bind(this)
    }

    myRef = React.createRef();

    rightClick() {
        console.log(this.myRef)
        const slide = this.myRef.current
        slide.scrollLeft += 330
        this.setState({
            ref: this.state.ref+=330,
            outfit: this.state.update
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
            outfit: this.state.oufit
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
        var checker = (this.state.outfit.length * 141.3)
        if(this.state.ref >= checker) {
            return (
                <button className='carouselHide' id='rightBut' onClick={() => {this.rightClick()}}></button>
            )
        } else {
            return (
                <button className='carouselArrow carouselRight' id='rightBut' onClick={() => {this.rightClick()}}></button>
            )
        }
    }


    
    componentDidMount() {
        this.outfitUpdate()
    }

    outfitUpdate() {
        var outfitArr = []
        for (var key in window.localStorage) {
            if (localStorage[key] === 'DANGO') {
                outfitArr.push(parseInt(key,10))
            }
        }
        this.setState({
            outfit: outfitArr,
            ref: this.state.ref
        })
    }

    addToOutfit() {
        console.log('add has run', this.props.current)
        window.localStorage.setItem(`${this.props.current}`, `DANGO`)
        this.outfitUpdate()
    }

    removeFromOutfit(item) {
        var outfitArr = []
        for (var key in window.localStorage) {
            if (localStorage[key] === 'DANGO') {
                outfitArr.push(parseInt(key,10))
            }
        }
        for (var i = 0; i < outfitArr.length; i++) {
            if (outfitArr[i] === item) {
                window.localStorage.removeItem(item)
            }
        }
        this.outfitUpdate()
    }

    render() {
        console.log('LOCAL STORAGE', window.localStorage)
        if (this.state.outfit === undefined) {
            return (
                <div>{console.log('YOUR OUTFIT BEFORE', this.state.outfit)}please wait</div>
            )
        }
        return (
            <div>
                {console.log('YOUR OUTFIT AFTER', this.state.outfit)}
                <h3>YOUR OUTFIT</h3>
                    <div className='related-carousel'>
                                <div className='add-card' onClick={() => {this.addToOutfit()}}>
                                    <div className='add-container'></div>
                                    <h5 className='add-text'><b>Add To Outfit</b></h5>
                                    <h1 className='add-icon'>+</h1>
                                </div>
                                {this.state.outfit.map((item, index) => {
                                    return(
                                    <div key={index}>
                                        <OutfitProd focus={item} removeFromOutfit={this.removeFromOutfit}/>
                                    </div>
                                    )
                                })}
                    </div>
                    {this.leftButton()}{this.rightButton()}
            </div>
        )
    }
}

export default Outfit;
