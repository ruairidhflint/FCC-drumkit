import React, { useState, useEffect } from 'react';

import DrumPad from './DrumPad';

function DrumContainer() {
  const [keyPressed, setKeyPressed] = useState(null);

  const keypress = (e) => {
    const key = e.key.toUpperCase();
    setKeyPressed(key);
  };

  useEffect(() => {
    window.addEventListener('keydown', keypress);
  });
  return (
    <div id="drum-machine">
      <div className="row">
        <DrumPad letter="Q" keyPressed={keyPressed} />
        <DrumPad letter="W" keyPressed={keyPressed} />
        <DrumPad letter="E" keyPressed={keyPressed} />
      </div>
      <div className="row">
        <DrumPad letter="A" keyPressed={keyPressed} />
        <DrumPad letter="S" keyPressed={keyPressed} />
        <DrumPad letter="D" keyPressed={keyPressed} />
      </div>
      <div className="row">
        <DrumPad letter="Z" keyPressed={keyPressed} />
        <DrumPad letter="X" keyPressed={keyPressed} />
        <DrumPad letter="C" keyPressed={keyPressed} />
      </div>
    </div>
  );
}

export default DrumContainer;
