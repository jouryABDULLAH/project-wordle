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
  const [gameStatus, setGameStatus] = React.useState(undefined); 

  function handleSubmitedGuess(input){
    const nextGuessList = [...guessList, input];
    setGuessList(nextGuessList);
  }

  // let banner = gameStatus==='win'? <div className="happy banner"> <p> <strong>Congratulations!</strong> Got it in <strong>{guessList.length} guesses</strong>. </p> </div> : <div class="sad banner"> <p>Sorry, the correct answer is <strong>{answer}</strong>.</p> </div> ;
  let banner = "";
  if(gameStatus==='win'){
    banner = <div className="happy banner"> <p> <strong>Congratulations!</strong> Got it in <strong>{guessList.length} guesses</strong>. </p> </div> ;
  } else if(guessList.length === 6){
    banner = <div class="sad banner"> <p>Sorry, the correct answer is <strong>{answer}</strong>.</p> </div> ;
  }

  return (
  <>
  <div className="game-wrapper">
   <GuessResults guesses={guessList} answer={answer} setGameStatus={setGameStatus}/>
   <GuessInput handleSubmit={handleSubmitedGuess} gameStatus={gameStatus} numOfGuesses={guessList.length}/>

  

    {banner}

  </div>
  </>
  );
}

export default Game;
