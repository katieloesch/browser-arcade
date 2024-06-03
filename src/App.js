import { Route, Routes } from "react-router-dom";
import { Home, TicTacToe, Hangman, RockPaperScissors, Simon, PageNotFound } from './components'


function App() {

  return (
   <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/tictactoe' element={<TicTacToe />} />
      <Route path='/hangman' element={<Hangman />} />
      <Route path='/rockpaperscissors' element={<RockPaperScissors />} />
      <Route path='/simon' element={<Simon />} />
      <Route path='*' element={<PageNotFound />} />

   </Routes>
  );
}

export default App;
