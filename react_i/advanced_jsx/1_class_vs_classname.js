// Writing HTML in JSX is different than plain HTML

// When assigning attributes to HTML elements, the commonly-used class attribute must be called `className`

// When the JSX is rendered `className` is compiled as `class`

import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
const myDiv = (<div className="big">I AM A BIG DIV</div>);

ReactDOM.render(myDiv, document.getElementById('app'));
