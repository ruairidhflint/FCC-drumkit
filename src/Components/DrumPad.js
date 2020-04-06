import React from 'react';

function DrumPad(props) {
  return (
    <div class="drum-pad" id={props.letter}>
      {props.letter}
    </div>
  );
}

export default DrumPad;
