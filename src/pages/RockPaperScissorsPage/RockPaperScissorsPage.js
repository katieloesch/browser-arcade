import React from 'react';

import {
  BtnHome,
  Contact,
  GameContainer,
  RockPaperScissors,
} from '../../components';
import './RockPaperScissorsPage.scss';

const RockPaperScissorsPage = () => {
  return (
    <GameContainer game={'rps'}>
      <BtnHome page='rps' />
      <RockPaperScissors />
      <Contact />
    </GameContainer>
  );
};

export default RockPaperScissorsPage;
