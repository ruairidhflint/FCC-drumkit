import React, { useState, useEffect } from 'react';
import DrumPad from './DrumPad';

import * as sounds from '../Sounds/index';

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
          sound={sounds.bass}
          setCurrentSound={setCurrentSound}
        />
        <DrumPad
          letter="W"
          keyPressed={keyPressed}
          setKeyPressed={setKeyPressed}
          sound={sounds.clap}
          setCurrentSound={setCurrentSound}
        />
        <DrumPad
          letter="E"
          keyPressed={keyPressed}
          setKeyPressed={setKeyPressed}
          sound={sounds.cowbell}
          setCurrentSound={setCurrentSound}
        />
      </div>
      <div className="row">
        <DrumPad
          letter="A"
          keyPressed={keyPressed}
          setKeyPressed={setKeyPressed}
          sound={sounds.hihat}
          setCurrentSound={setCurrentSound}
        />
        <DrumPad
          letter="S"
          keyPressed={keyPressed}
          setKeyPressed={setKeyPressed}
          sound={sounds.kick}
          setCurrentSound={setCurrentSound}
        />
        <DrumPad
          letter="D"
          keyPressed={keyPressed}
          setKeyPressed={setKeyPressed}
          sound={sounds.maraca}
          setCurrentSound={setCurrentSound}
        />
      </div>
      <div className="row">
        <DrumPad
          letter="Z"
          keyPressed={keyPressed}
          setKeyPressed={setKeyPressed}
          sound={sounds.openHat}
          setCurrentSound={setCurrentSound}
        />
        <DrumPad
          letter="X"
          keyPressed={keyPressed}
          setKeyPressed={setKeyPressed}
          sound={sounds.snare}
          setCurrentSound={setCurrentSound}
        />
        <DrumPad
          letter="C"
          keyPressed={keyPressed}
          setKeyPressed={setKeyPressed}
          sound={sounds.punch}
          setCurrentSound={setCurrentSound}
        />
      </div>
    </div>
  );
}

export default DrumContainer;
