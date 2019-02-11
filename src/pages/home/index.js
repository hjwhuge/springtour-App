import React, { Component } from 'react';

import Footer from '../../components/footer';
import './index.scss'
import { Carousel} from 'antd-mobile';
class Home extends Component {
    state = {
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
        }]
      }

      render() {
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
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                            }}
                        />
                    ))}
                </Carousel>
                {/* 导航 */}
                <section>
                    {this.state.nav.map((item,idx)=>(
                        <a href="https://m.springtour.com/guonei" key={idx}>
                            <img src={item.src} alt=""/>
                            <span>{item.title}</span>
                        </a>
                    )

                    )}
                </section>
                {/* 限时抢购 */}
                {/* 产品推荐 */}
                {/* 猜你喜欢 */}
                {/* 底部菜单 */}
                <Footer/>
            </div>
        );
      }

  }


export default Home;

