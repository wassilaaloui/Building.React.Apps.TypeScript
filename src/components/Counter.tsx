// src/components/Counter.tsx
import React, { Component } from 'react';

// ✅ Define the shape of the state using an interface
interface CounterState {
  count: number;
}

// ✅ Define props type (empty in this case)
interface CounterProps {}

class Counter extends Component<CounterProps, CounterState> {
  // ✅ Explicitly type the state
  state: CounterState = {
    count: 0
  };

  // ✅ Use arrow function to retain `this` context
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
