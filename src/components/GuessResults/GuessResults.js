import React from 'react';

function GuessResults({Guesses}) {
  
  return (
  <>
    <div className="guess-results">
      {Guesses.map((guess, index)=> <p key={index} className="guess">{[...guess].map((char, index)=> <span key={index} className='cell'>{char}</span>)}</p>)}
    </div>
  </>
  );
}

export default GuessResults;
