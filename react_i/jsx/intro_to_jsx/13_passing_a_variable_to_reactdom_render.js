// The first argument can be a variable if it evaluates to a JSX expression (ie. was assigned to)

import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
let myList = (
  <ul>
    <li>Eyeliner</li>
    <li>Black lipstick</li>
  </ul>
);

ReactDOM.render(myList, document.getElementById('app'));
