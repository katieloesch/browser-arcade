import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import './PageTransition.scss';

const PageTransition = ({ children }) => {
  const game = window.location.pathname.substring(1);

  return <AnimatePresence></AnimatePresence>;
};

export default PageTransition;
