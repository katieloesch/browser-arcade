import React from 'react'
import { Link } from 'react-router-dom'
import './GameCard.scss'

const GameCard = ({ game }) => {
  return (
    <div className='game-card flex'>
        <h3>
          <Link to={game.url}>{game.title}</Link>
        </h3>
      
    </div>
  )
}

export default GameCard
