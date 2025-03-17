import logo from './logo.svg'; // Importing the logo
import './App.css';  // Importing the CSS file for styling

function App() {
  // Example variable that we can use dynamically in JSX
  const name = "John";
  const tasks = ["Study React", "Read books", "Exercise"];
  const isAuthenticated = true; // Conditional

  // Example of dynamic styling
  const textStyle = {
    color: 'blue',
    fontSize: '20px'
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* Example of logo with JSX */}
        <img src={logo} className="App-logo" alt="logo" />

        {/* Example of greeting with a variable */}
        <p style={textStyle}>Hello, {name}! Welcome to our website.</p>

        {/* Example of conditional rendering in JSX */}
        <p>
          {isAuthenticated ? 'You are authenticated!' : 'Please log in.'}
        </p>

        {/* Example of rendering a list with JSX */}
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>

        {/* Example of a link with JSX */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      {/* Example of a button that triggers an event when clicked */}
      <button onClick={() => alert('Button clicked!')}>Click here</button>

      {/* Example of an input field */}
      <div>
        <label htmlFor="name">Enter your name:</label>
        <input 
          type="text" 
          id="name" 
          placeholder="Your name" 
          onChange={(e) => console.log(e.target.value)} 
        />
      </div>
    </div>
  );
}

export default App;
