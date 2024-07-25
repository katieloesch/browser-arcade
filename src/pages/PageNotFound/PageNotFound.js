import React from 'react';
import { BtnHome } from '../../components';

import './PageNotFound.scss';

const PageNotFound = () => {
  return (
    <div className='page-not-found'>
      <h1>404</h1>
      <h1>Page not found</h1>
      <BtnHome />
    </div>
  );
};

export default PageNotFound;
