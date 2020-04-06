import React from 'react';

function DrumPad(props) {
  const click = () => {
    props.setCurrentSound(props.sound.name);
    const div = document.getElementById(`audio-${props.letter}`);
    div.classList.add('active');
    const audio = document.getElementById(props.letter);
    audio.currentTime = 0;
    audio.play();
    removeClass(div, 'active');
    props.setKeyPressed(null);
  };

  const removeClass = (elem, removed) => {
    setTimeout(() => elem.classList.remove(removed), 300);
  };

  if (props.keyPressed === props.letter) {
    click();
  }

  return (
    <div onClick={click} className={`drum-pad`} id={`audio-${props.letter}`}>
      <audio className="clip" id={props.letter} src={props.sound.sound} />
      {props.letter}
    </div>
  );
}

export default DrumPad;
