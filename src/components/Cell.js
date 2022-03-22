import React, { useContext } from 'react';
import { GameContext } from '../App';

const Cell = ({cellPosition, rowPosition}) => {
  const {board, handlePlayerChoiceSelect, addToDomRef} = useContext(GameContext);
  // inputing either X or O on the board
  const playerChoice = board[rowPosition][cellPosition];
  
  return (
    <div className='cell' ref={addToDomRef} onClick={(e)=>handlePlayerChoiceSelect(e,cellPosition, rowPosition)}>
        {playerChoice}
    </div>
  )
};

export default Cell;
