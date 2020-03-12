// The only property that MUST be included in the body of the component class is a render method that includes a return statement (usually returns JSX)

import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}
