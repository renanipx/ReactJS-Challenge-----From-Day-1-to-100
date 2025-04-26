import React from 'react';
import { UserProvider } from './UserContext';
import UserProfile from './UserProfile';

function App() {
  return (
    <UserProvider>
      <div className="App">
        <h1>Welcome App</h1>
        <UserProfile />
      </div>
    </UserProvider>
  );
}

export default App;
