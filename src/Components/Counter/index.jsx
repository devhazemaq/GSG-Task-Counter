import React, { Component } from 'react'

import "./index.css"

export default class Counter extends Component {
  render() {

      const {id, value, handleIncrease, handleDecrease} = this.props
    return (
      
      <div className='main__counter'> 

        <div className='counter__ele'>
          <span className='span__show'>{value}</span>
          <button className='btn__dec' disabled={!value} onClick={()=> handleDecrease(id)} >-</button>
          <button className='btn__inc' onClick={()=> handleIncrease(id)} >+</button>

        </div>
        
        
      </div>
    )
  }
}
