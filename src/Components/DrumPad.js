import React from 'react';

function DrumPad(props) {
  const click = () => {
    props.setCurrentSound(`audio-${props.letter}`);
    const div = document.getElementById(`audio-${props.letter}`);
    div.classList.add('hello');
    const audio = document.getElementById(props.letter);
    audio.currentTime = 0;
    audio.play();
    removeClass(div, 'hello');
    props.setKeyPressed(null);
  };

  const removeClass = (elem, removed) => {
    setTimeout(() => elem.classList.remove(removed), 200);
  };

  if (props.keyPressed === props.letter) {
    click();
  }

  return (
    <div onClick={click} className={`drum-pad`} id={`audio-${props.letter}`}>
      <audio className="clip" id={props.letter} src={props.sound} />
      {props.letter}
    </div>
  );
}

export default DrumPad;
