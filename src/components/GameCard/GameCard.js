import React from 'react'
import './GameCard.scss'

const GameCard = ({ gameData }) => {
  return (
    <div className='game-card flex'>
        <p>{gameData.title}</p>
      
    </div>
  )
}

export default GameCard
