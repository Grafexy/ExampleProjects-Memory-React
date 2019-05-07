import React, { useState } from 'react';
import './App.css';
import Game from './components/Game';

function App() {
  const [mode, setMode] = useState(false);
  return (
    <div className="App">
      <header className="App-header">Memory Game</header>
      <section id="buttons">
        <button type="button" onClick={() => setMode('easy')}>
          Easy
        </button>
        <button type="button" onClick={() => setMode('medium')}>
          Medium
        </button>
        <button type="button" onClick={() => setMode('hard')}>
          Hard
        </button>
      </section>

      {mode && <Game mode={mode} />}
    </div>
  );
}

export default App;
