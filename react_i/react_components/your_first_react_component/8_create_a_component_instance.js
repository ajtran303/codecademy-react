// After creating a component class, instantiate new components by writing it into a JSX element

// Thus, JSX elements can be like HTML or actual component instances -- Capitalization is used to distinguish them ie. ComponentInstance vs HTML tag

import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

// component goes here:
<MyComponentClass />
