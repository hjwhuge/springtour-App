import React, { Component } from 'react';

import Footer from '../../components/footer';
import './index.scss'

// import axios from 'axios';
import { NavBar, Icon ,Tabs, WhiteSpace} from 'antd-mobile';
import { StickyContainer} from 'react-sticky';
class Find extends Component {
    constructor(){
        super();
        this.state = {
            tabs: [
                { title: '最新' },
                { title: '手绘攻略' },
                { title: '热门话题' },
                { title: '达人游记' }
              ],

        }
    }
    componentWillMount(){
        // axios.get('/spring/m/home/queryPositionContents?cityId=211&positionId=905&t=201901242043&springsign=5CD2B35C949EB7D16944456F50EE5FC9FA02EA83').then(res=>{
        //     // console.log(res.data.data)
        //     let img = res.data.data.data.banners;
        //     let hot = res.data.data.positions[0].data.keywords;
        //     // console.log(hot)
        //     this.setState({
        //         conImg:img,
        //         hot
        //     })
        // })
    }

    navTab(nav){
        // console.log(nav)
        // this.setState({
        //     active:nav.name
        // })
        // axios.get(nav.url).then(res=>{
        //     // console.log(res.data.data.data.banners)
        //     // console.log(res)
        //     let con = res.data.data.data.banners;
        //     this.setState({
        //         con
        //     })
        // })
    }

    render() {
        let {tabs} = this.state;
        return(
            <div className="find">
                <NavBar
                    mode="light"
                    icon={<Icon type="left" color='#00be88' size='lg'/>}
                    className="top"
                >发现
                </NavBar>
                <div className="search">
                    <div className="sear">
                        <Icon type='search' size='xxs'/>
                        <input type="text" placeholder="搜索你想去的地方"/>
                        <Icon type='cross-circle' size='xxs'/>
                    </div>
                </div>
                <div className="prd">
                    <WhiteSpace />
                        <StickyContainer>
                            <Tabs tabs={tabs}
                                initalPage={'t2'}
                                tabBarActiveTextColor={'#00be88'}
                                tabBarUnderlineStyle={{'borderColor':'#00be88'}}
                                // tabDirection={'vertical'}
                                // renderTabBar={renderTabBar}
                                // usePaged={false}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                                    aa
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                                    bb
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                                    cc
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                                    dd
                                </div>
                            </Tabs>
                        </StickyContainer>
                    <WhiteSpace />
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Find;