import React, { useState } from 'react';

function Counter() {
  // Declaring the "counter" state and the function to update it
  const [counter, setCounter] = useState(0);

  // Function to increment the counter
  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
