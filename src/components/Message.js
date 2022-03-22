import React,{useContext} from 'react';
import { GameContext } from '../App';
import { defaultBoard } from '../extras';

const Message = (props) => {
  const {gameOver, setGameOver, setBoard, cellDomElements, playerClass} = useContext(GameContext);
  const {gameMessage} = props;

  const restartGame = ()=>{
      setGameOver({
          ...gameOver,
          gameStatus: false
      });
      setBoard(defaultBoard);
      clearDomElements();
  }
  const clearDomElements = ()=>{
      cellDomElements.map((element)=>{
          element.current.classList.remove(playerClass.circle);
          element.current.classList.remove(playerClass.x);
      })
  }
  return (
    <div className='message-container'>{gameMessage}
        {gameOver.gameStatus && <button className='restart-btn' onClick={restartGame}>Restart Game</button>}
    </div>
  )
};

export default Message;
