// An if statement can be included inside a render function before the return statement.

import React from 'react';
import ReactDOM from 'react-dom';

const fiftyFifty = Math.random() < 0.5;

// New component class starts here:
class TonightsPlan extends React.Component {
  render () {
  let decide;
  if (fiftyFifty == true) {
    decide = "Tonight I'm going out WOOO";
  } else {
    decide = "Tonight I'm going to bed WOOO";
  }
  return <h1>{decide}</h1>;
  }
}

ReactDOM.render(<TonightsPlan />, document.getElementById('app'));
