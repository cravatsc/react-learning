import React from 'react';
import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App1() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.....
        </p>
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

const App = () => 
    <div className="App">
        <h2>Let's get started!!</h2>
        <p>This is also visible</p>
        <ExpenseItem></ExpenseItem>
    </div>

export default App;