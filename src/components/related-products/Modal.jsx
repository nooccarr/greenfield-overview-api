import React from 'react';

class Modal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }



    render() {
        return (
            <div className='modal-holder'>
                <section className='modal-main' onClick={() => {this.props.toggleModal()}}>
                    <h6>COMPARING</h6>
                </section>
            </div>
        )
    }

}


export default Modal;