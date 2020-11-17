import React from 'react';
import RelatedProd from './Relatedprod';


const Related = (props) => (
    <div>
        <h3>RELATED PRODUCTS</h3>
        <div className='row mx-auto my-auto'>
            <div id='relatedCarousel' className='carousel slide w-100' data-ride='carousel'>
                {props.related.map((item, index) => {
                    return (
                        <div className='carousel-inner w-100' role='listbox'>
                            <div key={index} className='carousel-item'>
                                <div className='col-md-4'>
                                    <RelatedProd focus={item}/>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <a class="carousel-control-prev w-auto" href="#relatedCarousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon bg-dark border border-dark rounded-circle" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next w-auto" href="#relatedCarousel" role="button" data-slide="next">
                    <span class="carousel-control-next-icon bg-dark border border-dark rounded-circle" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>    
    </div>
)



export default Related;
