import React from 'react';

class Modal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        this.createInfo()
    }

    createInfo () {
        var compare = []
        var memory = {}
        for (var i = 0; i < this.props.focusFeatures.length; i++) {
            memory[this.props.focusFeatures[i].feature] = { feature: this.props.focusFeatures[i].feature, featVal: this.props.focusFeatures[i].value, curVal: ' '}
        }
        for (var i = 0; i < this.props.currentFeat.length; i++) {
            if (memory[this.props.currentFeat[i].feature] === undefined) {
                memory[this.props.currentFeat[i].feature] = { feature: this.props.currentFeat[i].feature, featVal: ' ', curVal: this.props.currentFeat[i].value}
            } else {
                memory[this.props.currentFeat[i].feature].curVal = this.props.currentFeat[i].value
            }
        }
        for (var key in memory) {
            compare.push(memory[key])
        }
        console.log(this.props.currentFeat)
        this.setState({
            compare: compare
        })
    }

    render() {
        if (this.state.compare === undefined) {
            return (
                <div>
                    please wait
                </div>
            )
        } else {
            return (
                <div className='modal-holder'>
                    <section className='modal-main' onClick={() => {this.props.modalOff()}}>
                        <h7>COMPARING</h7>
                        <p><h5 className='modal-product'>{this.props.name}</h5><h5 className='modal-prod-current'>{this.props.curName}</h5></p>
                        {this.state.compare.map((item, index) => {
                            return (
                                <div className='modal-text' key={index}>
                                <h7 className='modal-left'>{item.featVal}</h7><h7 className='modal-feature'>{item.feature}</h7><h7 className='modal-right'>{item.curVal}</h7>
                                </div>
                            )
                        })}
                    </section>
                </div>
            )
            }
    }

}


export default Modal;