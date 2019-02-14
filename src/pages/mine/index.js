import React, { Component } from 'react';

import Footer from '../../components/footer';
import './index.scss'

// import { NavBar, Icon ,Tabs, WhiteSpace} from 'antd-mobile';
class Mine extends Component {
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
            <div className="mine">
                <article className="main m-cb">
                    {/* 用户 */}
                    <section className="t-user">
                        <div className="user-icon">
                            {/* 消息图标 */}
                            <a href="http://m.springtour.com/site/chat/index?custId=&pageType=messageList"><i className="far fa-comment"></i></a>
                        </div>
                            <p className="user-login">
                                登录春秋，即刻启程
                                <a href="http://m.springtour.com/site/login?returnUrl=%2fsite%2fMember" data-role="ga" data-done="登录/注册">登录 / 注册</a>
                            </p>
                    </section>
                    {/* <div className="js_loading"></div> */}
                    {/* 我的订单 */}
                    <section className="t-ul user-order">
                        <ul className="t-ul user-list">
                            <li><a href="http://m.springtour.com/m/order/myorder" data-role="ga" data-done="全部订单"><i className="fas fa-money-check-alt"></i>全部订单<span className="ftr"><i className="fas fa-chevron-right"></i></span></a></li>
                        </ul>
                        <ul className="ul">
                            <li className="js-orderCount"><a href="http://m.springtour.com/m/order/myorder?type=1" data-role="ga" data-done="审核中"><i className="fas fa-shopping-cart"></i>审核中</a></li>
                            <li className="js-orderCount"><a href="http://m.springtour.com/m/order/myorder?type=2" data-role="ga" data-done="待付款"><i className="fas fa-shopping-cart"></i>待付款</a></li>
                            <li className="js-orderCount"><a href="http://m.springtour.com/m/order/myorder?type=4" data-role="ga" data-done="待出行"><i className="fas fa-shopping-cart"></i>待出行</a></li>
                            <li className="js-orderCount"><a href="http://m.springtour.com/m/order/myorder?type=3" data-role="ga" data-done="待点评"><i className="fas fa-shopping-cart"></i>待点评</a></li>
                        </ul>
                        <ul className="t-ul user-list">
                            <li><a href="http://m.springtour.com/site/member/privatecustomlist" data-role="ga" data-done="我的定制订单"><i className="fas fa-money-check-alt"></i>我的定制订单<span className="ftr"><i className="fas fa-chevron-right"></i></span></a></li>

                            <li><a href="http://m.springtour.com/m/order/myorderold" data-role="ga" data-done="我的历史订单"><i className="fas fa-money-check-alt"></i>我的历史订单<span className="ftr"><i className="fas fa-chevron-right"></i></span></a></li>

                            <li><a href="http://m.springtour.com/m/hotel/orderlist" data-role="ga" data-done="酒店订单"><i className="fas fa-money-check-alt"></i>酒店订单<span className="ftr"><i className="fas fa-chevron-right"></i></span></a></li>
                        </ul>

                    </section>
                    

                    {/* <列表 */}
                    <ul className="t-ul user-list">
                        <li><a href="/m/wallet/myWallet"><i className="fas fa-money-check-alt"></i>春秋钱包<span className="ftr"><i className="fas fa-chevron-right"></i></span></a></li>
                        <li className="js-orderCount"><a href="http://m.springtour.com/site/member/coupons" data-role="ga" data-done="我的优惠券"><i className="fas fa-money-check-alt"></i>我的优惠券<span className="ftr"><i className="fas fa-chevron-right"></i></span></a></li>
                        <li><a href="http://m.springtour.com/site/member/points" data-role="ga" data-done="我的积分"><i className="fas fa-money-check-alt"></i>我的积分<span className="ftr"><i className="fas fa-chevron-right"></i></span></a></li>
                        <li><a href="http://m.springtour.com/site/member/ChunqiuInstallmentPay" data-role="ga" data-done="春秋白花花"><i className="fas fa-money-check-alt"></i>春秋白花花<span className="ftr"><i className="fas fa-chevron-right"></i></span></a></li>
                        <li><a href="http://m.springtour.com/site/member/collects" data-role="ga" data-done="我的收藏"><i className="fas fa-money-check-alt"></i>我的收藏<span className="ftr"><i className="fas fa-chevron-right"></i></span></a></li>
                        <li><a href="http://m.springtour.com/site/member/message" data-role="ga" data-done="我的咨询"><i className="fas fa-money-check-alt"></i>我的咨询<span className="ftr"><i className="fas fa-chevron-right"></i></span></a></li>
                    </ul>

                    {/* 列表 */}
                    <ul className="t-ul user-list">
                        <li><a href="http://m.springtour.com/site/member/travelers" data-role="ga" data-done="常旅客信息"><i className="fas fa-money-check-alt"></i>常旅客信息<span className="ftr"><i className="fas fa-chevron-right"></i></span></a></li>
                        <li><a href="http://m.springtour.com/site/member/address" data-role="ga" data-done="常用地址"><i className="fas fa-money-check-alt"></i>常用地址<span className="ftr"><i className="fas fa-chevron-right"></i></span></a></li>
                        <li><a href="http://m.springtour.com/site/Activity/QueryActivity?activityType=4&amp;valid=1 " data-role="ga" data-done="银联境外卡奖励"><i className="fas fa-money-check-alt"></i>银联境外卡奖励<span className="ftr"><i className="fas fa-chevron-right"></i></span></a></li>
                    </ul>
                </article>

                <Footer/>
            </div>
        )
    }
}

export default Mine;
