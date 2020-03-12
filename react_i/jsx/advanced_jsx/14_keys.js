// Sometimes a list might need keys

// `key` is a JSX attribute with a name `key` and a unique value, similar to an `id` attribute

// React uses keys to internally keep track of list items. Use them if either/or:

// list items need to have memory of when they should or shouldn't render from one render to the next (state?)

// a list order might be shuffled

import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map((person, i) =>
  // expression goes here:
  <li key={'person_' + i}>{person}</li>
);

// ReactDOM.render goes here:
ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById('app'));
