// Libraries
import React from 'react';

function DrumPad(props) {
  // Function to play sound and visualise click
  const click = () => {
    // Send current sound title up and back down to the display component
    props.setCurrentSound(props.sound.name);
    // Grab the div of the clicked/key pressed DIV
    const div = document.getElementById(`audio-${props.letter}`);
    // Add a class with styles that reflect it being pressed
    div.classList.add('active');
    // Grab the audio element
    const audio = document.getElementById(props.letter);
    // Reset if it's been previously pressed
    audio.currentTime = 0;
    // Play!
    audio.play();
    // Call function (below) to remove class.
    removeClass(div, 'active');
    // Reset the current key pressed
    props.setKeyPressed(null);
  };

  const removeClass = (elem, removed) => {
    // Removes the earlier added class after 200ms allowing for a quick flash of colour
    // to indicate a press.
    setTimeout(() => elem.classList.remove(removed), 200);
  };

  if (props.keyPressed === props.letter) {
    click();
  }

  return (
    <div
      tabindex={props.tabIndex}
      onClick={click}
      className={`drum-pad`}
      id={`audio-${props.letter}`}
    >
      <audio className="clip" id={props.letter} src={props.sound.sound} />
      {props.letter}
    </div>
  );
}

export default DrumPad;
