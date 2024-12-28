// src/App.js
import React from 'react';
import PriceCard from './PriceCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pricing Plans</h1>
      </header>
      <main>
        <PriceCard />
      </main>
    </div>
  );
}

export default App;
