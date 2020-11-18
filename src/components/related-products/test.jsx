import React from 'react';
import RelatedProd from './Relatedprod';

class Related extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }






    render() {
        return (
        <div>
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
            {this.leftButton()}{this.rightButton()}
        </div>
        )
    }
}

export default Related;