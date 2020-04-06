import React, { useState } from 'react';

function DrumPad(props) {
  let active;

  const click = () => {
    const audio = document.getElementById(props.letter);
    audio.currentTime = 0;
    active = {border: '1px solid orange'};
    audio.play();
  };

  if (props.keyPressed === props.letter) {
    click();
  }

  return (
    <div
    style={active}
      onClick={click}
      className={`drum-pad`}
      id={`audio-${props.letter}`}
    >
      <audio className="clip" id={props.letter} src={props.sound} />
      {props.letter}
    </div>
  );
}

export default DrumPad;
