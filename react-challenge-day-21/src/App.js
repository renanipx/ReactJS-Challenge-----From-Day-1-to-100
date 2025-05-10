import React from 'react';
import MyComponent from './MyComponent';
import withLogger from './withLogger';

const MyComponentWithLogger = withLogger(MyComponent);

function App() {
  return (
    <div>
      <MyComponentWithLogger name="Alice" />
    </div>
  );
}

export default App;
