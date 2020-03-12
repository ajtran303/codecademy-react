// Curly braces can escape the JSX and let JS take over.

// This example renders `5` to the screen.

import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
ReactDOM.render(
  <h1>{2 + 3}</h1>,
  document.getElementById('app')
);
