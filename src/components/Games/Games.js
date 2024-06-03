import React from 'react'
import { gamesData } from '../../gamesData'
import { GameCard } from '../../components'
import './Games.scss'

const Games = () => {


  return (
    <div className="games-container flex">

      {gamesData.map((game) => (<GameCard game={game} key={`game-${game.id}`} />))}

    </div>
  )
}

export default Games
