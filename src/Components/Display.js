// Libraries
import React from 'react';

function Display({ currentSound }) {
  if (currentSound) {
    return <h1 id="display">{currentSound}</h1>;
  } else {
    return (
      <h1 id="display">
        Drum Machine by{' '}
        <a href="https://rory.codes" target="_blank" rel="noopener noreferrer">
          Rory Flint
        </a>
      </h1>
    );
  }
}

export default Display;
