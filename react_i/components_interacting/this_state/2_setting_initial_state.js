// state is declared inside of a class's constructor function (thanks ES6!)

// React components always call super in their constructor so that their instances can inherit the props passed in as a parameter

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	// constructor method begins here:
  constructor(props) {
    super(props);
    this.state = { title: 'Best App' }
  }
	
  render() {
    return (
      <h1>
        Wow this entire app is just an h1.
      </h1>
    );
  }
}