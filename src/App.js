import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {
  LandingPage,
  TicTacToe,
  Hangman,
  RockPaperScissors,
  Simon,
  PageNotFound,
} from './pages';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/tictactoe' element={<TicTacToe />} />
        <Route path='/hangman' element={<Hangman />} />
        <Route path='/simon' element={<Simon />} />
        <Route path='/rockpaperscissors' element={<RockPaperScissors />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
