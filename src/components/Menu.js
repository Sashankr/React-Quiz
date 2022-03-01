import React, { useState } from 'react'
import '../App.css'
import { useContext } from 'react'
import { GameStateContext } from '../helpers/Contexts'

const Menu = () => {

  const {setGameState,username,setUserName} = useContext(GameStateContext);

  return (
    <div className='menu'>
      <label htmlFor="name">Enter your name : </label>
      <input value={username} onChange={(event)=>{setUserName(event.target.value)}} type="text" placeholder='Example : John Smith'/>
      <button onClick={()=>{setGameState('playing')}}>Start Quiz</button>
    </div>
  )
}

export default Menu