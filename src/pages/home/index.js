import React, { Component } from 'react';

import Footer from '../../components/footer';
import Goods from '../../components/goods';
import './index.scss'
import { Carousel,Tabs, WhiteSpace} from 'antd-mobile';
import { StickyContainer} from 'react-sticky';
import axios from 'axios';

// function renderTabBar(props) {
//     return (<Sticky>
//       {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
//     </Sticky>);
//   }
class Home extends Component {
    constructor(){
        super();
        this.state = {
            data: ['http://media.china-sss.com/img/M00/04/50/wKjFbVxHz-SAeOvRAAGbxOu9abE411.jpg',
            'http://media.china-sss.com/img/M00/04/4F/wKjFbFw_6IyAcb8hAARDtrHvH1M288.jpg',
            'http://media.china-sss.com/img/M00/04/46/wKjFbFwu7L2AR4lkAALIQ_nOj3A995.jpg',
            'http://media.china-sss.com/img/M00/04/45/wKjFbFwkk5eAfcdBAAOVaUNq5Ek538.jpg',
            'http://media.china-sss.com/img/M00/04/4A/wKjFbFw9QgOAblxrAALX57hoxUM259.jpg',
            'http://media.china-sss.com/img/M00/04/4D/wKjFbFw9tC-AYBXYAASFlCvVWfM868.jpg'],
            imgHeight: 176,
            nav:[{
                src:'//media.china-sss.com/img/M00/04/36/wKjFbFvyLD-ASRIrAAARE0N2Yh0778.png',
                title:'国内游'
            },
            {
                src:'//media.china-sss.com/img/M00/04/36/wKjFbFvyLD-AObSLAAATqap666k706.png',
                title:'出境游'
            },
            {
                src:'//media.china-sss.com/img/M00/04/36/wKjFbVvyLD-AKwRpAAAOCp8L3l0599.png',
                title:'跟团游'
            },
            {
                src:'//media.china-sss.com/img/M00/04/36/wKjFbVvyLE-ACTr7AAAMXhfeqlY352.png',
                title:'自由行'
            },
            {
                src:'//media.china-sss.com/img/M00/04/36/wKjFbVvyLE-AQkWpAAAPTxr6Po0048.png',
                title:'周边游'
            },
            {
                src:'//media.china-sss.com/img/M00/04/46/wKjFbFwnSQWAQ94tAAAT5ZV3Cbc926.png',
                title:'日本游'
            },
            {
                src:'//media.china-sss.com/img/M00/04/0F/wKjFbFt7y0GAWRUsAAASvo84-LY721.png',
                title:'泰国游'
            },
            {
                src:'//media.china-sss.com/img/M00/00/0D/wKjFbFp8Ff6ADyOAAAAODeFvLsU418.png',
                title:'欧洲游'
            },
            {
                src:'//media.china-sss.com/img/M00/04/45/wKjFbVwl4lmAEm9CAAAUqQUHrGY090.png',
                title:'酒店'
            },
            {
                src:'//media.china-sss.com/img/M00/04/45/wKjFbVwm60WANVOWAAAY6j400vE369.png',
                title:'机票'
            }],
            limit:'',
            tabs: [
                { title: '本季主打' },
                { title: '品质出境' },
                { title: '省心国内' },
              ],
              lead:'',
              trait:'',
              civil:'',
              like:''
          }
    }

    

    componentWillMount(){
        // 限时抢购
        axios.get('/spring/m/home/queryContent?cityId=211&positionId=99&t=201902112217&springsign=A89E04533970B7FCB21140B77E7F901C857A7F47').then(res=>{
            // console.log(res)
            // console.log(res.data.data.data.products[0])
            this.setState({
                limit:res.data.data.data.products[0]          
            })
            
        })
        // 本季主打
        axios.get('/spring/m/home/queryContent?cityId=211&positionId=103&t=201902120953&springsign=E961DE66E409042790C6E66189558AAAB15F3460').then(res=>{
            // console.log(res.data.data.data.products)
            this.setState({
                lead:res.data.data.data.products         
            })
        })
        // 品质出境
        axios.get('/spring/m/home/queryContent?cityId=211&positionId=102&t=201902120953&springsign=F223B2C776364CC0C62A19AF0A954E70A4836B66').then(res=>{
            // console.log(res.data.data.data.products)
            this.setState({
                trait:res.data.data.data.products          
            })
        })
        // 省心国内
        axios.get('/spring/m/home/queryContent?cityId=211&positionId=101&t=201902120845&springsign=E930A7E04361864738DAA26104D723D407DBAA5A').then(res=>{
            // console.log(res.data.data.data.products)
            this.setState({
                civil:res.data.data.data.products         
            })
        })
        // 猜你喜欢
        axios.get('/spring/m/home/queryContent?cityId=211&positionId=101&t=201902121517&springsign=9640CA157D0E77F50F0E6B365CD9BE9EB721F6BD').then(res=>{
            // console.log(res.data.data.data.products[0])
            this.setState({
                like:res.data.data.data.products[0]       
            })
        })
    }

    shouldComponentUpdate(prevProps, nextState){
        // 可以根据state或者props来控制是否重新渲染组件，优化性能
        return true;
        
    }
      render() {
        let {limit,tabs,lead,trait,civil,like} = this.state;
        return (
            <div className="home">
                {/* 轮播图 */}
                <Carousel
                    autoplay={true}
                    infinite
                    dotStyle={{borderRadius: '100%',background:'none',border:'.013333rem solid #fff',width:'.066667rem'}}
                    dotActiveStyle={{borderRadius: '100%',border:'.013333rem solid #fff',background: '#fff',width:'.066667rem'}}
                    >
                    {this.state.data.map((val,idx) => (
                        <img
                            src={val}
                            alt=""
                            key={idx}
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                            // fire window resize event to change height
                            // 用来图片没加载显示高度
                            window.dispatchEvent(new Event('resize'));
                            // this.setState({ imgHeight: 'auto' });
                            }}
                        />
                    ))}
                </Carousel>
                {/* 导航 */}
                <section className="clearfix nav-box">
                    {this.state.nav.map((item,idx)=>(
                        <a href="https://m.springtour.com/guonei" key={idx}>
                            <img src={item.src} alt=""/>
                            <span>{item.title}</span>
                        </a>
                    )

                    )}
                </section>
                {/* 限时抢购 */}
                <section className="t-box">
                    <div className="limit-panel clearfix">
                        <figure>
                            <div className="img_l">
                                <i>当期狂欢</i>
                                <img src={limit.imgurl} alt=""/>
                            </div>
                        </figure>
                        <div className="txt-outer">
                            <h2>{limit.productName}</h2>
                            <p>
                                <span className="price">￥<em>{limit.price}</em>起</span>
                                <span className="start">{limit.cityName} 出发</span>
                            </p>
                        </div>
                    </div>
                    <ul className="push-wrap clearfix">
                        <li>
                            <h3>新人大礼包</h3>
                            <p>666优惠券</p>
                            <img src="http://media.china-sss.com/img/M00/00/0C/wKjFbVp4JcWAY0tsAAAgFUy47Eo190.png" alt=""/>
                        </li>
                        <li>
                            <h3>泰划算</h3>
                            <p>泰国品质跟团</p>
                            <img src="//media.china-sss.com/img/M00/04/0E/wKjFbVtzs9KAUTAMAAAv8sFSibk523.png" alt=""/>
                        </li>
                    </ul>
                </section>
                {/* 产品推荐 */}
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
                                    <Goods data={lead}/>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                                    <Goods data={trait}/>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                                    <Goods data={civil}/>
                                </div>
                            </Tabs>
                        </StickyContainer>
                    <WhiteSpace />
                </div>
                {/* 猜你喜欢 */}
                    <div className="like">
                        <h4>- 猜你喜欢 -</h4>
                        <div className="limit-panel clearfix">
                        <figure>
                            <div className="img_l">
                                <i>当期狂欢</i>
                                <img src={like.imgurl} alt=""/>
                            </div>
                        </figure>
                        <div className="txt-outer">
                            <h2>{like.productName}</h2>
                            <p>
                                <span className="price">￥<em>{like.price}</em>起</span>
                                <span className="start">{like.cityName} 出发</span>
                            </p>
                        </div>
                    </div>
                    </div>
                {/* 底部菜单 */}
                
                <Footer/>
            </div>
        );
      }
      
  }


export default Home;

