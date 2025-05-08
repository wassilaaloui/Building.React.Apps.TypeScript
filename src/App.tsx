
import React from 'react';
import './App.css';
import Greeting from './components/Greeting';
import Counter from './components/Counter';

function App() {
  return (
    <div className="app-container">
      <div className="greeting-box">
        <Greeting name="Wassila" />
      </div>
      <div className="counter-box">
        <Counter />
      </div>
    </div>
  );
}

export default App;
