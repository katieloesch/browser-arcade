import React from 'react'
import { Link } from 'react-router-dom'
import './GameCard.scss'

const GameCard = ({ game }) => {
  return (
    <Link to={game.url} className={`game-card flex ${game.alias}`}>{game.title}</Link>
  )
}

export default GameCard
