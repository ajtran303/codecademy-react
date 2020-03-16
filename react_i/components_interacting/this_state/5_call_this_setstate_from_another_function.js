// Usually this.setState() is wrapped in another function

// This example demonstrates changing <Mood /> state with an event handler.

// The event handler to call this.changeColor() actually unbinds this so it has to be bound in the constructor with `bind`

// In React, when dealing with event handlers that use `this`, the constructor needs to include `this.methodName = this.methodName.bind(this)`

import React from 'react';
import ReactDOM from 'react-dom';

const green = '#39D1B4';
const yellow = '#FFD712';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: green }
    this.changeColor = this.changeColor.bind(this);
  }
  
  changeColor() {
    const newColor = this.state.color == green ? yellow : green; // ternary operator
    this.setState({ color: newColor });
  }
  
  // the double curly braces below is explained in intro to react part 2.
  render() {
    return (
      <div style={{background: this.state.color}} >
        <h1>
          Change my color
        </h1>
        <button onClick={this.changeColor}>
          Change color
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Toggle />, document.getElementById('app'));