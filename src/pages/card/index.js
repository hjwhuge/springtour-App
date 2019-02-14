import React, { Component } from 'react';

import './index.scss'

// import axios from 'axios';
// import { NavBar, Icon} from 'antd-mobile';

class Card extends Component {
    constructor(){
        super();
        this.state = {
            

        }
    }
    componentWillMount(){

    }

    render() {
        // let {tabs} = this.state;
        return(
            <div className="card">
                <h1>购物车</h1>
            </div>
        )
    }
}

export default Card;