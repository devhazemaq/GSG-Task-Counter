import React, { Component } from 'react'
import Counter from '../../Components/Counter'
import './index.css'



export default class Home extends Component {



  
  render() {
    return (
      <div className="home_contain">
        
      <Counter />
      <Counter />
      <Counter />

      </div>
    );
  }
}
