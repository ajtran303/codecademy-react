// A component can render props passed to it by referencing {this.props.attrName} in the component class's render function

import React from 'react';
import ReactDOM from 'react-dom';

class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.firstName}</h1>;
  }
}

ReactDOM.render(
  <Greeting firstName='Ton' />, 
  document.getElementById('app')
);