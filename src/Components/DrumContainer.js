import React, { useState, useEffect } from 'react';
import DrumPad from './DrumPad';

import Clap from '../Sounds/Clap.wav';
import Crash from '../Sounds/Crash.wav';
import Perc01 from '../Sounds/Perc01.wav';
import Perc02 from '../Sounds/Perc02.wav';
import ClHat from '../Sounds/ClHat.wav';
import Snare01 from '../Sounds/Snare01.wav';
import Snare02 from '../Sounds/Snare02.wav';
import Tom01 from '../Sounds/Tom01.wav';
import Tom02 from '../Sounds/Tom02.wav';

function DrumContainer({ setCurrentSound }) {
  const [keyPressed, setKeyPressed] = useState(null);

  const keypress = (e) => {
    const key = e.key.toUpperCase();
    setKeyPressed(key);
  };

  useEffect(() => {
    window.addEventListener('keydown', keypress);
  }, []);

  return (
    <div id="drum-machine">
      <div className="row">
        <DrumPad
          letter="Q"
          keyPressed={keyPressed}
          setKeyPressed={setKeyPressed}
          sound={Clap}
          setCurrentSound={setCurrentSound}
        />
        <DrumPad
          letter="W"
          keyPressed={keyPressed}
          setKeyPressed={setKeyPressed}
          sound={Crash}
          setCurrentSound={setCurrentSound}
        />
        <DrumPad
          letter="E"
          keyPressed={keyPressed}
          setKeyPressed={setKeyPressed}
          sound={Perc01}
          setCurrentSound={setCurrentSound}
        />
      </div>
      <div className="row">
        <DrumPad
          letter="A"
          keyPressed={keyPressed}
          setKeyPressed={setKeyPressed}
          sound={Perc02}
          setCurrentSound={setCurrentSound}
        />
        <DrumPad
          letter="S"
          keyPressed={keyPressed}
          setKeyPressed={setKeyPressed}
          sound={ClHat}
          setCurrentSound={setCurrentSound}
        />
        <DrumPad
          letter="D"
          keyPressed={keyPressed}
          setKeyPressed={setKeyPressed}
          sound={Snare01}
          setCurrentSound={setCurrentSound}
        />
      </div>
      <div className="row">
        <DrumPad
          letter="Z"
          keyPressed={keyPressed}
          setKeyPressed={setKeyPressed}
          sound={Snare02}
          setCurrentSound={setCurrentSound}
        />
        <DrumPad
          letter="X"
          keyPressed={keyPressed}
          setKeyPressed={setKeyPressed}
          sound={Tom01}
          setCurrentSound={setCurrentSound}
        />
        <DrumPad
          letter="C"
          keyPressed={keyPressed}
          setKeyPressed={setKeyPressed}
          sound={Tom02}
          setCurrentSound={setCurrentSound}
        />
      </div>
    </div>
  );
}

export default DrumContainer;
