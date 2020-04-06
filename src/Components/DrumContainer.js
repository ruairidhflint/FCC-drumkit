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

function DrumContainer() {
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
        />
        <DrumPad
          letter="W"
          keyPressed={keyPressed}
          setKeyPressed={setKeyPressed}
          sound={Crash}
        />
        <DrumPad
          letter="E"
          keyPressed={keyPressed}
          setKeyPressed={setKeyPressed}
          sound={Perc01}
        />
      </div>
      <div className="row">
        <DrumPad
          letter="A"
          keyPressed={keyPressed}
          setKeyPressed={setKeyPressed}
          sound={Perc02}
        />
        <DrumPad
          letter="S"
          keyPressed={keyPressed}
          setKeyPressed={setKeyPressed}
          sound={ClHat}
        />
        <DrumPad
          letter="D"
          keyPressed={keyPressed}
          setKeyPressed={setKeyPressed}
          sound={Snare01}
        />
      </div>
      <div className="row">
        <DrumPad
          letter="Z"
          keyPressed={keyPressed}
          setKeyPressed={setKeyPressed}
          sound={Snare02}
        />
        <DrumPad
          letter="X"
          keyPressed={keyPressed}
          setKeyPressed={setKeyPressed}
          sound={Tom01}
        />
        <DrumPad
          letter="C"
          keyPressed={keyPressed}
          setKeyPressed={setKeyPressed}
          sound={Tom02}
        />
      </div>
    </div>
  );
}

export default DrumContainer;
