import { useState } from 'react'
import Header from './Components/Header'
import Game from './Components/Game'
import './App.css'

const App = () => {
  const [message, setMessage] = useState("Welcome to Battleship!")

  return (
    <div>
      <Header announcementMessage={message}></Header>
      <Game></Game>
    </div>
  );
};

export default App;
