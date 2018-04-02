import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.increment = this.increment.bind(this);

    this.state = { value: 0 }
  }

  render() {
    return (
      <div>
        <span className="value">{this.state.value}</span>
        <button id="inc" onClick={this.increment}>Incrementa</button>
      </div>
    );
  }

  increment() {
    this.setState({ value: this.state.value + 1 });
  }
}

export default App;
