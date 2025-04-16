import React from 'react';

import { range } from '../../utils.js'

import { checkGuess } from '../../game-helpers.js'

function Guess({value, setGameStatus, count}) {

  let win = undefined;
  for(i in value){
    if (value[i]['status'] === 'correct'){
      win = true;
    }else{
      win = false;
      break;
    }
  }

  if(win){
    setGameStatus('win');
  }
  // console.log(`count: ${count} \n---\nvalue: ${value} `);

  // if(count === 6 && value){
  //   setGameStatus('over');
  // }
  return (
    <p className='guess'>
      {range(5).map((index)=> <span className={value? `${value[index]['status']} cell` : ` cell`} key={index}>{value? value[index]['letter'] : undefined}</span>)}
    </p>
  );
}

export default Guess;
