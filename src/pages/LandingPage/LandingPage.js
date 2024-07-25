import React from 'react';

import { MatrixEffectCanvas, Games } from '../../components';
import './LandingPage.scss';

const LandingPage = () => {
  return (
    <div className='landing-page'>
      <MatrixEffectCanvas />

      <div className='landing-page__content'>
        <h1 className='app-title'>Welcome to the Browser Arcade</h1>
        <Games />
      </div>
    </div>
  );
};

export default LandingPage;
