import React from 'react';

import './goods.scss'


// {
    // cityName,
    // imgurl,
    // price,
    // productName,
    // productTypeName,
    // scheduleDateList
// }

let goods = (props)=>{
    let data = props.data;
    // console.log(data)
    if(data === ''){
        return <div></div>
    }
    return (
        // <h3>测试</h3>
        <div>
        {
            data.map((val,idx)=>(
                <div className="goods" key={idx}>
                    <figure>
                        <div className="img_l">
                            <i className="type">{val.productTypeName}</i>
                            <i className="tag">{val.cityName}出发</i>
                            <img src={val.imgurl} alt=""/>
                        </div>
                    </figure>
                    <div className="txt-outer">
                        <h2>{val.productName}</h2>
                        <p className="server">
                            <span>骑大象</span>
                            <span>泰式按摩</span>
                        </p>
                        <p className="times">班期：{val.scheduleDateList}</p>
                        <p className="price">￥<em>{val.price}</em>起</p>
                    </div>
                </div>
            ))
        }
        </div>
    )
};



export default goods;