// Libraries
import React, { useState, useEffect } from 'react';
import DrumPad from './DrumPad';

// Sounds
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
          tabIndex="1"
        />
        <DrumPad
          letter="W"
          keyPressed={keyPressed}
          setKeyPressed={setKeyPressed}
          sound={sounds.clap}
          setCurrentSound={setCurrentSound}
          tabIndex="2"
        />
        <DrumPad
          letter="E"
          keyPressed={keyPressed}
          setKeyPressed={setKeyPressed}
          sound={sounds.cowbell}
          setCurrentSound={setCurrentSound}
          tabIndex="3"
        />
      </div>
      <div className="row">
        <DrumPad
          letter="A"
          keyPressed={keyPressed}
          setKeyPressed={setKeyPressed}
          sound={sounds.hihat}
          setCurrentSound={setCurrentSound}
          tabIndex="4"
        />
        <DrumPad
          letter="S"
          keyPressed={keyPressed}
          setKeyPressed={setKeyPressed}
          sound={sounds.kick}
          setCurrentSound={setCurrentSound}
          tabIndex="5"
        />
        <DrumPad
          letter="D"
          keyPressed={keyPressed}
          setKeyPressed={setKeyPressed}
          sound={sounds.maraca}
          setCurrentSound={setCurrentSound}
          tabIndex="6"
        />
      </div>
      <div className="row">
        <DrumPad
          letter="Z"
          keyPressed={keyPressed}
          setKeyPressed={setKeyPressed}
          sound={sounds.openHat}
          setCurrentSound={setCurrentSound}
          tabIndex="7"
        />
        <DrumPad
          letter="X"
          keyPressed={keyPressed}
          setKeyPressed={setKeyPressed}
          sound={sounds.snare}
          setCurrentSound={setCurrentSound}
          tabIndex="8"
        />
        <DrumPad
          letter="C"
          keyPressed={keyPressed}
          setKeyPressed={setKeyPressed}
          sound={sounds.punch}
          setCurrentSound={setCurrentSound}
          tabIndex="9"
        />
      </div>
    </div>
  );
}

export default DrumContainer;
