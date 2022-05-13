import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const handleOpenAlert = () => {
    alert('hello react')
  }
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={handleOpenAlert}>Open alert</button>
          <a
              className="App-link"
              href="https://github.com/emilierave"
              target="_blank"
              rel="noopener noreferrer"
          >
            test-react-project
          </a>
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
  );
}

export default App;
