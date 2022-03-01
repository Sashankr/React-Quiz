import React from 'react'
import '../App.css'

const Menu = () => {
  return (
    <div className='menu'>
      <label htmlFor="name">Enter your name : </label>
      <input type="text" placeholder='Example : John Smith'/>
      <button>Start Quiz</button>
    </div>
  )
}

export default Menu