import React from 'react';
import { Link } from 'react-router-dom';
import './BtnHome.scss';

const BtnHome = ({ page }) => {
  return (
    <div className={`btn btn-home btn-home-${page}`}>
      <Link to='/'>&#8592; Back to Arcade</Link>
    </div>
  );
};

export default BtnHome;
