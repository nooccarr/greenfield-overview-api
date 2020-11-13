import React from 'react';
import Related from './Related';
import Outfit from './Outfit';

class RelatedOutfit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            related: [],
            outfit: []
        }


    }













    render() {
        return (
            <div>
                <Related/>
                <Outfit/>
            </div>
        )
    }


}