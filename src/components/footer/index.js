import React from 'react';
import {withRouter} from 'react-router-dom';
import { TabBar, Icon } from 'antd-mobile';

import './footer.scss';


class footer extends React.Component {
    constructor() {
      super();
      this.state = {
        selectedTab: 'home',
        seen:'none'
      };
    }
    // componentWillUpdate(nextProps, nextState){
    //   console.log(nextProps, nextState)
    //   nextProps.history.push('/'+nextState.selectedTab)
    // }

    componentDidMount(){
      // console.log('this.props',this.props)
      // 利用生命周期函数来保持当前路由高亮
      // 获取当前路由（hash,history）
      let hash = window.location.hash;// 可能得到的值：/home,/list,/list/computer
      hash = hash.split('/')[1];
      // console.log(this.state.seen)
      this.setState({
        selectedTab:hash
      })

  }

  close(){
    this.setState({
      seen:'none'
    });
  }

  render() {
    let {history} = this.props;
    return (
      <div className="fotter">
        <div style={{ position: 'fixed', width: '100%', bottom: 0 ,zIndex: 2}}>
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
          >
            <TabBar.Item
              title="首页"
              key="home"
              icon={<div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
              />
              }
              selectedIcon={<div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
              />
              }
              selected={this.state.selectedTab === 'home'}
              onPress={() => {
                
                this.setState({
                  selectedTab: 'home',
                });
                history.replace('/home')
              }}
              data-seed="logId"
            >
            </TabBar.Item>
            <TabBar.Item
              icon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
                />
              }
              selectedIcon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
                />
              }
              title="目的地"
              key="destination"
              selected={this.state.selectedTab === 'destination'}
              onPress={() => {
                this.setState({
                  selectedTab: 'destination',
                });
                history.replace('/destination')
              }}
              data-seed="logId1"
            >
            </TabBar.Item>
            <TabBar.Item
              icon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
                />
              }
              selectedIcon={
                <div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
                />
              }
              title="发现"
              key="find"
              selected={this.state.selectedTab === 'find'}
              onPress={() => {
                this.setState({
                  selectedTab: 'find',
                });
                history.replace('/find')
              }}
            >
            </TabBar.Item>
            <TabBar.Item
              icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
              selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
              title="客服"
              key="member"
              selected={this.state.selectedTab === 'member'}
              onPress={() => {
                this.setState({
                  // selectedTab: 'member',
                  seen:'block'
                });
                // history.replace('/member')
              }}
            >
            </TabBar.Item>
            <TabBar.Item
              icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
              selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
              title="我的"
              key="mine"
              selected={this.state.selectedTab === 'mine'}
              onPress={() => {
                this.setState({
                  selectedTab: 'mine'
                });
                history.replace('/mine')
              }}
            >
            </TabBar.Item>
          </TabBar>
        </div>
        <div className="dialog" style={{display:this.state.seen}}>
              <div className="dialog-bd">
                <ul>
                  <li>
                      <Icon type='check-circle' size='lg' color='#00be88'/>
                      <p>电话咨询</p>
                  </li>
                  <li>
                      <Icon type='loading' size='lg' color='#00be88'/>
                      <p>在线客服</p>
                  </li>
                </ul>
              </div>
              <div className="dialog-ft" onClick={this.close.bind(this)}>
                  <Icon type='cross-circle' size='lg'/>
              </div>
        </div>
      </div>
    );
    }
  }

  footer = withRouter(footer);

export default footer;

