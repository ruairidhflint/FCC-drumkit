import React from 'react';

function DrumPad(props) {
  const click = () => {
    console.log(props.letter);
    const audio = document.getElementById(props.letter);
    audio.currentTime = 0;
    audio.play();
    props.setKeyPressed(null);
  };

  if (props.keyPressed === props.letter) {
    click();
  }

  return (
    <div onClick={click} className="drum-pad">
      <audio className="clip" id={props.letter} src={props.sound} />
      {props.letter}
    </div>
  );
}

export default DrumPad;
