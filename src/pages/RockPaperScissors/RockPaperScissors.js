import React from 'react';

import { BtnHome, GameContainer } from '../../components';
import './RockPaperScissors.scss';

const RockPaperScissors = () => {
  return (
    <GameContainer game={'rps'}>
      <h2>Rock Paper Scissors</h2>
      <BtnHome />
    </GameContainer>
  );
};

export default RockPaperScissors;
