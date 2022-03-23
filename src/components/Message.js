import React,{useContext} from 'react';
import { GameContext } from '../App';
import { defaultBoard } from '../extras';

const Message = (props) => {
  const {gameOver, setGameOver, setBoard, cellDomElements, playerClass} = useContext(GameContext);
  const {gameMessage} = props;

  // main game restart function
  const restartGame = ()=>{
      setGameOver({
          ...gameOver,
          gameStatus: false
      });
      setBoard(defaultBoard);
      clearDomElements();
  }

  // clearing the domelement of the block refs 
  const clearDomElements = ()=>{
      cellDomElements.current.forEach((element)=>{
          element.classList.remove(playerClass.circle);
          element.classList.remove(playerClass.x);
          element.textContent = '';
      })
  };

  return (
    <div className='message-container'>{gameMessage}
        {gameOver.gameStatus && <button className='restart-btn' onClick={restartGame}>Restart Game</button>}
    </div>
  )
};

export default Message;
