import React from 'react';

function ChildComponent(props) {
  return (
    <div>
      <h2>Child Component</h2>
      <p>{props.greeting}</p> {/* Accessing data passed via props */}
      <p>My favorite number is: {props.favoriteNumber}</p>
    </div>
  );
}

export default ChildComponent;
