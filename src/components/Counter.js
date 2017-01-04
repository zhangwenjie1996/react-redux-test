import React,{Component} from 'react'

export default class Counter extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <h1>计数器总数:{this.props.value}</h1>
        <button className='btn btn-primary' onClick={this.props.onIncrement}>点我加1</button>
        <button className='btn btn-success' onClick={this.props.onDecrement}>点我减1</button>
        <button className='btn btn-info' onClick={this.props.onRide}>点我乘2</button>
        <button className='btn btn-default' onClick={this.props.onExcept}>点我除2</button>
      </div>
    )
  }
}

Counter.propTypes={

}