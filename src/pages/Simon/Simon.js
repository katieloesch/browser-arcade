import React from 'react';

import { BtnHome, GameContainer } from '../../components';
import './Simon.scss';

const Simon = () => {
  return (
    <GameContainer game={'simon'}>
      <h2>Simon</h2>
      <BtnHome page='simon' />
    </GameContainer>
  );
};

export default Simon;
