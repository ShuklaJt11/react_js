import React from 'react';
import './App.css';
import TodoComponent from './TodoComponent'
// import logo from './logo.svg';

function App() {
  return (
    <div>
      <h1>ToDo List!</h1>
      <div className="app-container">
        <TodoComponent />
        <TodoComponent />
        <TodoComponent />
        <TodoComponent />
      </div>
    </div>
  );
}

export default App;
