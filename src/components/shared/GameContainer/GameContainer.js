import React from 'react';

import PageTransition from '../PageTransition/PageTransition';
import StairEffect from '../PageTransition/StairEffect';
import './GameContainer.scss';

const GameContainer = ({ game, children }) => {
  return (
    <div className={`game-container ${game}-container`}>
      <StairEffect />
      <PageTransition>{children}</PageTransition>
    </div>
  );
};

export default GameContainer;
