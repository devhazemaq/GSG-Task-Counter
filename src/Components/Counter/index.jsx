import React, { Component } from 'react'

import "./index.css"

export default class Counter extends Component {
  render() {


    return (
      <div className='main__counter'> 

        <div className='counter__ele'>
          <span className='span__show'>0</span>
          <button className='btn__dec' >-</button>
          <button className='btn__inc'>+</button>

        </div>
        
        
      </div>
    )
  }
}
