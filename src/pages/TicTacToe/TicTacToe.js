import React from 'react';

import { BtnHome, GameContainer } from '../../components';
import './TicTacToe.scss';

const TicTacToe = () => {
  return (
    <GameContainer game={'ttt'}>
      <h2>TicTacToe</h2>
      <BtnHome page='ttt' />
    </GameContainer>
  );
};

export default TicTacToe;
