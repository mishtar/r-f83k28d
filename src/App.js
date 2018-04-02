import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <span className="value">{this.state.count}</span>
        <button onClick={() => this.setState({ count: this.state.count + 1 })} id="inc">Incrementa</button>
      </div>
    );
  }
}

export default App;
