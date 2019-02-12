import React, { Component } from 'react';

import Footer from '../../components/footer';
import './index.scss'
import axios from 'axios';
import { NavBar, Icon } from 'antd-mobile';
class Destination extends Component {
    constructor(){
        super();
        this.state = {
            tabs : ['当季热门','国内','日本','欧洲','中东非','东南亚','港澳台','海岛'],
            conImg:'',
            hot:'',
            url:['http://m.springtour.com/m/home/queryPositionContents?cityId=211&positionId=905&t=201901242043&springsign=5CD2B35C949EB7D16944456F50EE5FC9FA02EA83',

            ]

        }
    }
    componentWillMount(){
        axios.get('/spring/m/home/queryPositionContents?cityId=211&positionId=905&t=201901242043&springsign=5CD2B35C949EB7D16944456F50EE5FC9FA02EA83').then(res=>{
            // console.log(res.data.data)
            let img = res.data.data.data.banners;
            let hot = res.data.data.positions[0].data.keywords;
            // console.log(hot)
            this.setState({
                conImg:img,
                hot
            })
        })
    }

    render() {
        let {tabs} = this.state;
        return(
            <div className="destination">
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >目的地
                </NavBar>
                <div className="tabs">
                    <ul className="tab-nav">
                        {
                            tabs.map((item,idx)=>(
                                <li key={idx}>{item}</li>
                            ))
                        }   
                    </ul>
                    <div className="tab-content">
                        <ul className="ul-img">

                        </ul>
                    </div>
                </div>
                
                <Footer/>
            </div>
        )
    }
}

export default Destination;