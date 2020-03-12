// React apps are made of components

// They are modular and re-uable code that does one thing, usually render some html

// Components start with some boilerplate code -- this lesson goes through what each line does

import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component{
  render() {
    return <h1>Hello world</h1>;
  }
};

ReactDOM.render(
  <MyComponentClass />,
  document.getElementById('app')
);
