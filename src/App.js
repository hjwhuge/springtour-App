import React, { Component } from 'react';

import {connect} from 'react-redux';

import './style/common.scss'

class App extends Component {

  render() {
    // console.log('props:',this.props)
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}

// let mapStateToProps = (state)=>{
//   console.log('mapStateToProps:',state)
//   return {
//       // 把goodslist属性映射到App的props中
//       goodslist:state.cart.goodslist,
//       price:state.goods.price
//   }
// }

// let mapDispatchToProps = (dispatch)=>{
//   return {
//       addcart:(goods)=>{
//           dispatch({
//               type:'ADD_TO_CART',
//               payload:goods
//           })
//       }
//   }
// }

// App = connect(mapStateToProps,mapDispatchToProps)(App);
App = connect()(App);

export default App;
