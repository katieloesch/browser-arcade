import React from 'react';

import { BtnHome, GameContainer } from '../../components';
import './Hangman.scss';

const Hangman = () => {
  return (
    <GameContainer game={'hangman'}>
      <h2>Hangman</h2>
      <BtnHome />
    </GameContainer>
  );
};

export default Hangman;
