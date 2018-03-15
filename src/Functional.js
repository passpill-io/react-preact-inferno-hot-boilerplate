import React from 'react';

const Functional = props => (
  <div>
    <h2>Functional</h2>
    <input type="text" {...props} />
  </div>
);

export default Functional;
