import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  // Data to be passed to the child component
  const message = "Hello from Parent Component!";
  const number = 42;

  return (
    <div>
      <h1>Parent Component</h1>
      {/* Passing data (message and number) as props to the child component */}
      <ChildComponent greeting={message} favoriteNumber={number} />
    </div>
  );
}

export default ParentComponent;
