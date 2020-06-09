import React, { useState } from 'react';
import './App.css';
import Header from './Header';

function App() {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter(counter + 1);
  }
  return (
    <div>
      <Header title="Hello World" />
      <h1>{counter}</h1>
      <button type="button" onClick={handleClick}>Aumentar</button>
      <h2>Conteúdo da aplicação</h2>
    </div>
  );
}

export default App;
