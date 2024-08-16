import React from 'react';
import { GameBtns } from '..';
import './RockPaperScissors.scss';

const RockPaperScissors = () => {
  return (
    <div className='rock-paper-scissors'>
      <div className='title-container'>
        <h1>Rock Paper Scissors</h1>
      </div>
      <div className='btns-container'>
        <GameBtns />
      </div>
    </div>
  );
};

export default RockPaperScissors;
