import React, { useContext } from 'react';
import { UserContext } from './UserContext';

function UserProfile() {
  const { username, setUsername } = useContext(UserContext);

  return (
    <div>
      <h2>User: {username}</h2>
      <button onClick={() => setUsername('Alice')}>Set Username to Alice</button>
    </div>
  );
}

export default UserProfile;
