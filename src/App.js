import React,{createContext, useRef, useState} from 'react';
import Board from './components/Board';
import Message from './components/Message';
import { defaultBoard, checkWin, checkDraw } from './extras';
import './style.css';

export const GameContext = createContext();

const App = () => {
  const [board, setBoard] = useState(defaultBoard);
  const [playerTurn, setPlayerTurn] = useState(false);
  const [gameOver, setGameOver] = useState({gameStatus: false, draw: false});
  const cellDomElements = useRef([]);
  const playerClass = {
      circle: 'circle',
      x: 'x'
  }
  const playerSignChoice = {
      circle: 'O',
      x: 'X',
  }

    // adding cell element refs
    const addToDomRef = (element)=>{
        if(element && !cellDomElements.current.includes(element)){
            cellDomElements.current.push(element);
        }
    };

  // handling player choice
  const handlePlayerChoiceSelect = (e, cellPosition, rowPosition)=> {
    if(gameOver.gameStatus) return; // closes loop if there is a winner or draw

    const cellBlock = e.target;
    let currentChoiceClass;
    // switching class based on turns
    if(playerTurn){
        currentChoiceClass = playerClass.circle
    }else{
        currentChoiceClass = playerClass.x;
    };

    // updating the board with the player sign
    const newBoard = [...board];
    newBoard[rowPosition][cellPosition] = addBoardChoiceSign(currentChoiceClass, cellBlock);
    setBoard(newBoard);

    // checking for game win
    if(checkWin(currentChoiceClass, cellDomElements )){
        setGameOver({gameStatus: true, draw: false});
        return;
    }else if(checkDraw(playerClass, cellDomElements)){
        setGameOver({gameStatus: true, draw: true});
        return;
    }else{
        changePlayerTurn();
    }
    
  };

  // adding the sign
  const addBoardChoiceSign = (currentChoiceClass, cellBlock) =>{
    // updating the dom and the board matrix
    cellBlock.textContent =  playerTurn ? playerSignChoice.circle: playerSignChoice.x;
    cellBlock.classList.add(currentChoiceClass);
    return playerTurn ? playerSignChoice.circle: playerSignChoice.x;
  }

  //switch player turn
  const changePlayerTurn = ()=>{
    setPlayerTurn(!playerTurn);
  }

  return (
    <div className='game-container'>
        <GameContext.Provider value={{
            board, setBoard, playerClass,
            playerTurn, setPlayerTurn,
            handlePlayerChoiceSelect,
            addToDomRef, gameOver, setGameOver, cellDomElements
        }}>
            <Message gameMessage={gameOver.gameStatus && gameOver.draw ? 'Draw': gameOver.gameStatus && 
            !gameOver.draw ? 'Win': 'Tic Tac Toe'}/>
            <Board/>
        </GameContext.Provider>
    </div>
  )
};

export default App;
