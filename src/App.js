import React, { useState } from 'react';
import './App.scss';

// Components
import DrumContainer from './Components/DrumContainer';
import Display from './Components/Display';

function App() {
  const [currentSound, setCurrentSound] = useState('');

  return (
    <div className="App">
      <DrumContainer setCurrentSound={setCurrentSound} />
      <Display currentSound={currentSound} />
    </div>
  );
}

export default App;


// TODO:
// Make whole design responsive
// Make index file to import files
// Rename files for accuracy
// Deploy
