import React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {
  LandingPage,
  TicTacToe,
  Hangman,
  RockPaperScissors,
  Simon,
  PageNotFound,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <PageNotFound />,
  },
  {
    path: '/tictactoe',
    element: <TicTacToe />,
  },
  {
    path: '/hangman',
    element: <Hangman />,
  },
  {
    path: '/simon',
    element: <Simon />,
  },
  {
    path: '/rockpaperscissors',
    element: <RockPaperScissors />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
