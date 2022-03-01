import React, { useContext } from 'react'
import '../App.css'
import { GameStateContext } from '../helpers/Contexts'
import { questions } from '../helpers/Questions';

const EndScreen = () => {

  const {score , username , setUserName ,setScore,setGameState} = useContext(GameStateContext);

  const restartQuiz = () => {
      setScore(0)
      setGameState('menu');
      setUserName('')
  }

  return (
    <div className='endscreen'>
        <h1>Quiz Finished</h1>
        <h3>Username : {username}</h3>
        <h2>Score : {score} / {questions.length}</h2>
        <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  )
}

export default EndScreen