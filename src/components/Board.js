import React from 'react';
import Cell from './Cell';

const Board = () => { // component for the general board
  return (
    <div className='board'>
        <div className='row'>
            <Cell cellPosition={0} rowPosition={0}/>
            <Cell cellPosition={1} rowPosition={0}/>
            <Cell cellPosition={2} rowPosition={0}/>
        </div>
        <div className='row'>
            <Cell cellPosition={0} rowPosition={1}/>
            <Cell cellPosition={1} rowPosition={1}/>
            <Cell cellPosition={2} rowPosition={1}/>
        </div>
        <div className='row'>
            <Cell cellPosition={0} rowPosition={2}/>
            <Cell cellPosition={1} rowPosition={2}/>
            <Cell cellPosition={2} rowPosition={2}/>
        </div>
    </div>
  )
};

export default Board;
