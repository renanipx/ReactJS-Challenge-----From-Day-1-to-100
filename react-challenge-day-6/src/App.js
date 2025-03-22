import React, { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('');
  const [inputName, setInputName] = useState(''); 

  const increaseCounter = () => setCounter(counter + 1);
  const decreaseCounter = () => setCounter(counter - 1);
  const handleNameChange = () => setName(inputName); 

  const handleInputChange = (event) => {
    setInputName(event.target.value);
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increaseCounter}>Increase counter</button>
      <button onClick={decreaseCounter}>Decrease counter</button>
      
      <div>
        <input 
          type="text" 
          value={inputName} 
          onChange={handleInputChange} 
          placeholder="Type your name" 
        />
        <button onClick={handleNameChange}>Set Name</button>
      </div>

      <p>Name: {name}</p>
    </div>
  );
}

export default App;
