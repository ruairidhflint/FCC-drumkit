import React from 'react';

import DrumPad from './DrumPad';

function DrumContainer() {
  return (
    <div id="drum-machine">
      <div className="row">
        <DrumPad letter="Q" />
        <DrumPad letter="W" />
        <DrumPad letter="E" />
      </div>
      <div className="row">
        <DrumPad letter="A" />
        <DrumPad letter="S" />
        <DrumPad letter="D" />
      </div>
      <div className="row">
        <DrumPad letter="Z" />
        <DrumPad letter="X" />
        <DrumPad letter="C" />
      </div>
    </div>
  );
}

export default DrumContainer;
