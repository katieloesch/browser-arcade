import React from 'react'
import { gamesData } from '../../gamesData'
import GameCard from '../GameCard/GameCard'
import './Games.scss'

const Games = () => {


  return (
    <div className="games-container flex">

      {gamesData.map((game) => (<GameCard gameData={game} key={`game-${game.id}`} />))}

    </div>
  )
}

export default Games
