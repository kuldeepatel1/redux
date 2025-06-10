import React from 'react';

function Child({ onShow }) {
  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={onShow}>Click to Call Parent Function</button>
    </div>
  );
}

export default Child;