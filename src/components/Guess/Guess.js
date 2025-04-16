import React from 'react';

import { range } from '../../utils.js'

import { checkGuess } from '../../game-helpers.js'

function Guess({value}) {

  return (
    <p className='guess'>
      {range(5).map((index)=> <span className={value? `${value[index]['status']} cell` : ` cell`} key={index}>{value? value[index]['letter'] : undefined}</span>)}
    </p>
  );
}

export default Guess;
