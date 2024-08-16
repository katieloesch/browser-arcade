import React from 'react';
import { motion } from 'framer-motion';

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
      {children}
    </motion.div>
  );
};

export default GameContainer;
