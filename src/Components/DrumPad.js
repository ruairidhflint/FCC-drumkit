import React from 'react';

function DrumPad(props) {
  const click = () => {
    console.log(props.letter);
    const audio = document.getElementById(`audio-${props.letter}`);
    audio.currentTime = 0;
    audio.play();
    props.setKeyPressed(null);
  };

  if (props.keyPressed === props.letter) {
    click();
  }

  return (
    <div onClick={click} className="drum-pad" id={props.letter}>
      <audio id={`audio-${props.letter}`} src={props.sound} />
      {props.letter}
    </div>
  );
}

export default DrumPad;
