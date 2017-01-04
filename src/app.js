// import { createStore } from 'redux'
// import React, { Component, PropTypes } from 'react'
// import ReactDOM, { render } from 'react-dom'


// // createStore:redux其中之一方法

// /*定义reducer */

// //reducer
// //纯函数
// //给定的输入参数，得到结果一定
// // initState,action
// const counter = (count = 0, action) => {

//   // action
//   // 简单的js对象{type:"xx"}

//   switch (action.type) {
//     case "INCREMNET":
//       return count + 1
//     case "DECREMENT":
//       return count - 1
//     default:
//       return count
//   }
// }
// let store = createStore(counter)

// class Counter extends Component {
//   render() {
//     <div>
//       <h1>计数器:{this.props.value}</h1>
//       <button onClick={this.props.onIncrement}>点我加1</button>
//       <button onClick={this.props.onDecrement}>点我减1</button>
//     </div>
//   }
// }

// const listener = () => {
//   render(
//     <Counter
//       value={store.getState()}
//       onIncrement={store.dispatch({ type: "INCREMNET" })}
//       onDecrement={store.dispatch({ type: "DECREMENT" })}
//       />,
//     document.getElementById('app'))
// }

// store.subscribe(listener)
// listener()

// // // 三个参数 reducer initState enhancer
// // const initState = {
// //   name: "zwj",
// //   city: "beijing"
// // }
// // 初始化数据
// // let store = createStore(counter)

// //state 
// // store 目前存储数据都有哪些
// // state tree
// // {count:0}

// /*store API */
// // dispatch  : dispatch(action)
// // getState :  getState()
// // replaceReducer : replaceReducer(nextReducer)
// // subscribe  :  subscribe(listener)
// // Symbol(observable) :  observable()
// // console.log(store)

// // console.log(store.getState())

// // // 手动调用dispath，触发一个action，修改数据

// // // {type :"INCREMNET",id:0,name:""} action
// // const actionCreator=(info,id)=>{
// // return {
// //   type:info,
// //   id:id
// // }
// // }
// // store.dispatch({type:"INCREMNET"})
// // store.dispatch({type:"INCREMNET"})
// // store.dispatch({type:"INCREMNET"})
// // store.dispatch({type:"DECREMENT"})
// // store.dispatch(actionCreator("INCREMNET",9))
// // store.dispatch(actionCreator("INCREMNET",9))
// // store.dispatch(actionCreator("INCREMNET",9))

// // console.log(store.getState())


// // const listener=()=>{
// //   document.body.innerText=store.getState();
// // }
// // // store 数据的监听 (一旦数据改变 ，执行listener)
// // store.subscribe(listener)

// // document.addEventListener('click',function(){
// // store.dispatch({type:"DECREMENT"})
// // })


import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import Counter from './components/Counter'

// reducer
const counter = (count = 0, action) => {

  switch (action.type) {
    case "INCREMNET":
      return count + 1
    case "DECREMENT":
      return count - 1
    case "RIDE":
      return count * 2
    case "EXCEPT":
      return count / 2
    default:
      return count
  }
}

let store = createStore(counter);
/*
props ={
  value:
  onIncrement:
  onDecrement:
}
 */

// class Counter extends Component {

//   render() {
//     console.log(this.props)
//     return (
//       <div>
//         <h1>计数器总数:{this.props.value}</h1>
//         <button className='btn btn-primary' onClick={this.props.onIncrement}>点我加1</button>
//         <button className='btn btn-success' onClick={this.props.onDecrement}>点我减1</button>
//       </div>
//     )
//   }
// }

// connect()返回的还是一个function
// connect()(参数是我们的组件)，返回值依然是一个组件
// RootApp被连接之后的组件
// 高阶组件


const mapStateToPorps = (state) => {
  return {
    value: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch({ type: "INCREMNET" }),
    onDecrement: () => dispatch({ type: "DECREMENT" }),
    onRide: () => dispatch({ type: "RIDE" }),
    onExcept: () => dispatch({ type: "EXCEPT" }),
  }

}
const RootApp = connect(mapStateToPorps, mapDispatchToProps)(Counter)

let root = document.getElementById('app')
render(
  <Provider store={store}>
    <RootApp />
  </Provider>, root)