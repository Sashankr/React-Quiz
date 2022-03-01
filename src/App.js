import React,{useState} from 'react';
import './App.css';
import Menu from './components/Menu';

function App() {

  
  const [gameState,setGameState] = useState('menu'); // ['menu','playing','finished']

  return (
    <div className="App">
     <h1>Quiz App</h1>
     {gameState === 'menu' && <Menu/>}
    </div>
  );
}

export default App;
