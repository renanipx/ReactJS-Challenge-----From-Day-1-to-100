import React, { useEffect, useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This side effect runs after every render
    console.log('Component rendered or updated');

    // Optional cleanup function
    return () => {
      console.log('Cleanup before re-running useEffect or unmounting');
    };
  }, [count]); // Only run this effect when 'count' changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Counter;
