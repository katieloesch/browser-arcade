import { Route, Routes } from 'react-router-dom';
import {
  LandingPage,
  TicTacToe,
  Hangman,
  RockPaperScissors,
  Simon,
  PageNotFound,
} from './pages';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/tictactoe' element={<TicTacToe />} />
      <Route path='/hangman' element={<Hangman />} />
      <Route path='/rockpaperscissors' element={<RockPaperScissors />} />
      <Route path='/simon' element={<Simon />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
