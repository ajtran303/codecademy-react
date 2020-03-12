// Component instances inherit methods from their ComponentClass ie. render()

// `To call a component’s render method, you pass that component to ReactDOM.render().`

// `ReactDOM.render() will tell <MyComponentClass /> to call ITS render method.`

// `<MyComponentClass /> will call its render method, which will return [a] JSX element.`

// `ReactDOM.render() will then take that resulting JSX element, and add it to the virtual DOM [and then] on the screen`

import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

// component goes here:
ReactDOM.render(<MyComponentClass />, document.getElementById('app'));
