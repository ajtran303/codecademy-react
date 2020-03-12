// ReactDOM is a JS library that has React-specific methods that deal with the DOM.

// ReactDOM.render() is one of the most common ways to render JSX.

// It takes a JSX expression, maps out those expressions to a tree of DOM nodes and then adds that tree to the actual DOM.

// The first argument passed to ReactDOM.render() should be a JSX expression.

import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
ReactDOM.render(<h1>Render me!</h1>, document.getElementById('app'));
