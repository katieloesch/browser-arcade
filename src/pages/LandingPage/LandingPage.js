import React from 'react';
import { motion } from 'framer-motion';

import { MatrixEffectCanvas, Games } from '../../components';
import './LandingPage.scss';

const LandingPage = () => {
  return (
    <div className='landing-page'>
      <MatrixEffectCanvas />

      <motion.div
        className='landing-page__content'
        initial={{ y: '100%' }} // Start off-screen at the bottom
        animate={{ y: '0%' }} // Move to its final position
        transition={{ delay: 1.6, duration: 0.6, ease: 'easeInOut' }} // Delay and animation timing
      >
        <h1 className='app-title'>Welcome to the Browser Arcade</h1>
        <Games />
      </motion.div>
    </div>
  );
};

export default LandingPage;
