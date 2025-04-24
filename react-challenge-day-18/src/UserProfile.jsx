import React, { useState } from 'react';

const UserProfile = () => {
  const [name, setName] = useState('John Doe');
  const [age, setAge] = useState(30);

  const updateName = () => {
    setName('Jane Smith');
  };

  const incrementAge = () => {
    setAge(prevAge => prevAge + 1);
  };

  return (
    <div>
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <button onClick={updateName}>Change Name</button>
      <button onClick={incrementAge}>Increase Age</button>
    </div>
  );
};

export default UserProfile;
