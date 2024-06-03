import { Route, Routes } from "react-router-dom";
import Home from './components/Home/Home'

function App() {

  return (
   <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/tictactoe' element='' />
      <Route path='/hangman' element='' />
      <Route path='/rockpaperscissors' element='' />
      <Route path='/simon' element='' />
   </Routes>
  );
}

export default App;
