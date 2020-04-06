// Libraries
import React, { useState } from 'react';
import './App.scss';

// Components
import DrumContainer from './Components/DrumContainer';
import Display from './Components/Display';

function App() {
  const [currentSoundName, setCurrentSoundName] = useState(null);

  return (
    <div className="App">
      <DrumContainer setCurrentSound={setCurrentSoundName} />
      <Display currentSound={currentSoundName} />
    </div>
  );
}

export default App;
