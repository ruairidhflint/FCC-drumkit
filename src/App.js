// Libraries
import React, { useState } from 'react';
import './App.scss';

// Components
import DrumContainer from './Components/DrumContainer';
import Display from './Components/Display';

function App() {
  const [currentSound, setCurrentSound] = useState(null);

  return (
    <div className="App">
      <DrumContainer setCurrentSound={setCurrentSound} />
      <Display currentSound={currentSound} />
    </div>
  );
}

export default App;

// TODO:
// Tidy code
// Add ability to tab(?)
// Deploy
