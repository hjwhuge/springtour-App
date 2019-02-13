import React from 'react';

import './index.scss'

let hot = (props)=>{
    let conImg = props.conImg;
    let hot = props.hot;
    // console.log(conImg,props)
    if(conImg === '' || hot === ''){
        return <div></div>
    }
    return (
        // <h4>测试</h4>
        <div className="hot">
            <ul className="ul-img clearfix">
                {
                    conImg.map((item,idx)=>(
                        <li key={idx}>
                            <h3>
                                <p>{item.title}</p>
                                <p>{item.subtitle}</p>
                            </h3>
                            <img src={item.imgurl} alt=""/>
                        </li>
                    ))
                }
            </ul>
            <h2>推荐目的地</h2>
            <ul className="ul-city">
                {
                    hot.map((item,idx)=>(
                        <li key={idx}>
                            {item.name}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
};



export default hot;