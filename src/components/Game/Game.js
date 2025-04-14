import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);

  function handleSubmitedGuess(input){
    const nextGuessList = [...guessList, input];
    setGuessList(nextGuessList);
  }

  return (
  <>
  <div className="game-wrapper">
   <GuessResults Guesses={guessList}/>
   <GuessInput handleSubmit={handleSubmitedGuess}/>

    {/* <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>3 guesses</strong>.
        </p>
    </div> */}
  </div>
  </>
  );
}

export default Game;
