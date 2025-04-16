import React from 'react';

function GuessInput({handleSubmit, gameStatus}) {

  const [input, setInput] = React.useState("");
  return (
  <form 
    className="guess-input-wrapper"
    onSubmit={(e)=>{
      e.preventDefault();
      handleSubmit(input);
      setInput("");
    }}
  >
   <label htmlForfor="guess-input">Enter guess:</label>
   <input 
    id="guess-input" 
    type="text" 
    value={input}
    pattern="\w{5,5}"
    title='5 letter word'
    disabled={gameStatus !='running'}
    onChange={(e)=>{
      const nextInput = e.target.value;
      setInput(nextInput.toUpperCase());
    }}

    required
   />
  </form>
);
}

export default GuessInput;
