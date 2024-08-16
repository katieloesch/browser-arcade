import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

import {
  LandingPage,
  TicTacToe,
  Hangman,
  Simon,
  PageNotFound,
  RockPaperScissorsPage,
} from './pages';

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait' initial={true}>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<LandingPage />} />
        <Route path='/tictactoe' element={<TicTacToe />} />
        <Route path='/hangman' element={<Hangman />} />
        <Route path='/simon' element={<Simon />} />
        <Route path='/rockpaperscissors' element={<RockPaperScissorsPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
};

export default App;
