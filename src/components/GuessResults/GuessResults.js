import React from 'react';
import { range } from '../../utils.js'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants.js'
import Guess from '../Guess';

function GuessResults({guesses}) {
  return (
  <>
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index)=> <Guess key={index} value={guesses[index]}></Guess>)}
    </div>
    {/* <div className="guess-results">
      {guesses.map((guess, index)=> <p key={index} className="guess">{[...guess].map((char)=> <span className='cell'>{char}</span>)}</p>)}
    </div> */}
  </>
  );
}

export default GuessResults;
