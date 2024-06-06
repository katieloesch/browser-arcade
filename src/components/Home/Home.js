import React from 'react'
import { Games } from '../../components'
import MatrixEffectCanvas from '../MatrixEffectCanvas/MatrixEffectCanvas'
import './Home.scss'

const Home = () => {
  return (
    <div className='home-container'>
      <MatrixEffectCanvas />

      <div className='home-content'>
        <h1 className="app-title">Welcome to the Browser Arcade</h1>
        <Games />
      </div>
     
    </div>



  )
}

export default Home
