import React, { Component } from 'react'
import Counter from '../../Components/Counter'
import './index.css'


export default class Home extends Component {
  state = {
    total: 0,
  };

  handleCounterChange = (value) => {
    this.setState((prevState) => ({
      total: prevState.total + value,
    })); 
  };

  render() {
    return (
      <div className="home_contain">
        <Counter onChange={this.handleCounterChange} />
        <Counter onChange={this.handleCounterChange} />
        <Counter onChange={this.handleCounterChange} />
        <h2 className="total">Total: {this.state.total}</h2>
      </div>
    );
  }
}
