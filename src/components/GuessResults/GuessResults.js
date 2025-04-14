import React from 'react';
import { range } from '../../utils.js'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants.js'
import Guess from '../Guess';
import { checkGuess } from '../../game-helpers.js'


function GuessResults({guesses, answer}) {
  console.log('answer in GR: ', answer);
  console.log('guesses in GR: ', guesses);
  return (
  <>
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index)=> <Guess ansewr={answer} key={index} value={checkGuess(guesses[index], answer)}></Guess>)}
    </div>
    {/* <div className="guess-results">
      {guesses.map((guess, index)=> <p key={index} className="guess">{[...guess].map((char)=> <span className='cell'>{char}</span>)}</p>)}
    </div> */}
  </>
  );
}

export default GuessResults;
