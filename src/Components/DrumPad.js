import React from 'react';

function DrumPad(props) {
  const click = () => {
    console.log(props.letter);
  };

  if (props.keyPressed === props.letter) {
    click();
  }

  return (
    <div onClick={click} className="drum-pad" id={props.letter}>
      {props.letter}
    </div>
  );
}

export default DrumPad;
