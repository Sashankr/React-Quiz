import React,{useState} from 'react';
import './App.css';
import Menu from './components/Menu';
import Quiz from './components/Quiz';
import { GameStateContext } from './helpers/Contexts';

function App() {

  const [gameState,setGameState] = useState('menu'); // ['menu','playing','finished']
  const [username,setUserName] = useState('')


  return (
    <div className="App">
     <h1>Quiz App</h1>
     <GameStateContext.Provider value={{gameState,setGameState,username,setUserName}}>
     {gameState === 'menu' && <Menu/>}
     {gameState === 'playing' && <Quiz/>}
     </GameStateContext.Provider>
    </div>
  );
}

export default App;
