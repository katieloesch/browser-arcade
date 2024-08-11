import React from 'react';
import { motion } from 'framer-motion';

// import PageTransition from '../PageTransition/PageTransition';
// import StairEffect from '../PageTransition/StairEffect';
import './GameContainer.scss';

const GameContainer = ({ game, children }) => {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}
      className={`game-container ${game}-container`}
    >
      {/* <StairEffect />
      <PageTransition>{children}</PageTransition> */}
      {children}
    </motion.div>
  );
};

export default GameContainer;
