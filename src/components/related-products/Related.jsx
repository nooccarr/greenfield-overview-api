import React from 'react';
import RelatedProd from './Relatedprod';


const Related = (props) => (
    <div>
        <h3>RELATED PRODUCTS</h3>
        {props.related.map((item, index) => {
            return (
                <div key={index}>
                    <RelatedProd focus={item}/>
                </div>
            )
        })}
    </div>
)



export default Related;
