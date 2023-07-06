import React, { Component } from 'react';
import './index.css';

export default class Counter extends Component {
  state = {
    counter: 0,
  };

  handleIncrease = () => {
    this.setState(
      (prevState) => ({
        counter: prevState.counter + 1,
      }),
      () => {
        this.props.onChange(1);
      }
    );
  };

  handleDecrease = () => {
    this.setState(
      (prevState) => ({
        counter: prevState.counter - 1,
      }),
      () => {
        this.props.onChange(-1);
      }
    );
  };

  render() {
    return (
      <div>
        <button className="btn__counter btn__increment" onClick={this.handleIncrease}>
          +
        </button>
        <span className="btn__counter span">{this.state.counter}</span>
        <button className="btn__counter btn__decrement" onClick={this.handleDecrease}>
          -
        </button>
      </div>
    );
  }
}
