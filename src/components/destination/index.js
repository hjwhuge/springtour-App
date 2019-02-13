import React from 'react';

import './index.scss'

let dest = (props)=>{
    let con = props.con;
    // console.log(con,props)
    if(con === ''){
        return <div></div>
    }
    return (
        // <h4>测试</h4>
        <div className="dest">
            <ul className="ul-img clearfix">
                {
                    con.map((item,idx)=>(
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
        </div>
    )
};



export default dest;