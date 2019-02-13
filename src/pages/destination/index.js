import React, { Component } from 'react';

import Footer from '../../components/footer';
import Hot from '../../components/hot';
import Dest from '../../components/destination';
import './index.scss'

import axios from 'axios';
import { NavBar, Icon } from 'antd-mobile';
class Destination extends Component {
    constructor(){
        super();
        this.state = {
            tabs : [{name:'当季热门',url:'/spring/m/home/queryPositionContents?cityId=211&positionId=905&t=201901242043&springsign=5CD2B35C949EB7D16944456F50EE5FC9FA02EA83'},
                    {name:'国内',url:'/spring/m/home/queryPositionContents?cityId=211&positionId=913&t=201902122224&springsign=CBC91A185D1DA5A8E8C4F849A7987D7C43CDDA77'},
                    {name:'日本',url:'/spring/m/home/queryPositionContents?cityId=211&positionId=915&t=201902122225&springsign=1189C107D18F794D84BA82D4171715969B44C99F'},
                    {name:'欧洲',url:'/spring/m/home/queryPositionContents?cityId=211&positionId=924&t=&springsign=62F45304A12695BDE1B3A4E241E60BD22F1DA51F'},
                    {name:'中东非',url:'/spring/m/home/queryPositionContents?cityId=211&positionId=2852&t=&springsign=B0C7068DB76716F7BBCE43CF2972FA2E1187A072'},
                    {name:'东南亚',url:'/spring/m/home/queryPositionContents?cityId=211&positionId=914&t=201902122223&springsign=35CFDDF7F0AAD317E330F1122286786B617A7F88'},
                    {name:'港澳台',url:'/spring/m/home/queryPositionContents?cityId=211&positionId=922&t=&springsign=6695A6668F449D841A1EB947E234F12E827972D9'},
                    {name:'海岛',url:'/spring/m/home/queryPositionContents?cityId=211&positionId=916&t=&springsign=9EBEA0E3A81F092AA896D6FC70FAD9249FB71668'}
                ],
            conImg:[],
            hot:[],
            conList:[],
            active:'当季热门',
            con:[]

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

    navTab(nav){
        // console.log(nav)
        this.setState({
            active:nav.name
        })
        axios.get(nav.url).then(res=>{
            // console.log(res.data.data.data.banners)
            // console.log(res)
            let con = res.data.data.data.banners;
            this.setState({
                con
            })
        })
    }

    render() {
        let {tabs,conImg,hot,active,con} = this.state;
        return(
            <div className="destination">
                <NavBar
                    mode="light"
                    icon={<Icon type="left" size='lg'/>}
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                        <Icon key="1" type="ellipsis" color="#00be88"/>,
                    ]}
                    className="top"
                >目的地
                </NavBar>
                <div className="search">
                    <a href="/" className="city">
                        <span>广州</span>
                        <Icon type='down' size='xs' color="#888"/>
                    </a>
                    <a href="/" className="sear">
                        <Icon type='search' size='xxs'/>
                        <input type="text" placeholder="搜索你想去的地方"/>
                    </a>
                </div>
                <div className="tabs clearfix">
                    <ul className="tab-nav">
                        {
                            tabs.map((item,idx)=>{
                                if(item.name === active){
                                    return <li style={{background: '#F5F5F9'}} key={idx} onClick={this.navTab.bind(this,item)}>{item.name}</li>
                                }else{
                                    return <li key={idx} onClick={this.navTab.bind(this,item)}>{item.name}</li>
                                }
                                
                            })
                        }
                    </ul>
                    <div className="tab-content">
                        {
                            active === '当季热门' ? <Hot conImg={conImg} hot={hot}/> : <Dest con={con}/>
                        }
                        
                    </div>
                </div>
                
                <Footer/>
            </div>
        )
    }
}

export default Destination;