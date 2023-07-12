import React, { Component } from 'react'
import Counter from '../../Components/Counter'
import './index.css'

const INITIAL_COUNTERS_QIM = {
  1: {
    value: 0,
    amount: 1,
  },
  2: {
    value: 0,
    amount: 1,
  },
  3: {
    value: 0,
    amount: 1,
  },
}

export default class Home extends Component {

  state = { counters: INITIAL_COUNTERS_QIM,}

  handleIncrease = (id) => {
    this.setState((prevState) => ({
      counters: {
        ...prevState.counters,
        
        [id]: {
          ...prevState.counters[id],
          value: prevState.counters[id].value + prevState.counters[id].amount,
        },
      },
    }));
  };

  handleDecrease = (id) => {
    if (this.state.counters[id].value !== 0) {
      this.setState((prevState) => ({
        counters: {
          ...prevState.counters,
          [id]: {
            ...prevState.counters[id],
            value: prevState.counters[id].value - prevState.counters[id].amount,
          },
        },
      }));
    }
  };


  render() {
    console.log(Object.entries(this.state.counters));
    return (
      <div className="home_contain">
        
      {Object.entries(this.state.counters).map(([key,object]) =>
          <Counter 
            key={key}
            id= {key}
            value ={object.value}
            handleIncrease={this.handleIncrease}
            handleDecrease={this.handleDecrease}
          />
      )} 
      tootal: {Object.values(this.state.counters).reduce(
          (acc, cur) => acc + cur.value,
          0
        )}

      </div>
      
    );
  }
}
