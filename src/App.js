import React,{useState} from 'react';
import './App.css';
import Menu from './components/Menu';
import { GameStateContext } from './helpers/Contexts';

function App() {

  const [gameState,setGameState] = useState('menu'); // ['menu','playing','finished']


  return (
    <div className="App">
     <h1>Quiz App</h1>
     <GameStateContext.Provider value={{gameState,setGameState}}>
     {gameState === 'menu' && <Menu/>}
     </GameStateContext.Provider>
    </div>
  );
}

export default App;
