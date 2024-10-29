import React from 'react'
import Home from './pages/Home/Home'
import Navbar from "./components/Navbar/Navbar";
import Player from './pages/Player/Player'
import TitleCards from './components/TitleCards/TitleCards'
import Login from './pages/Login/Login'


const App = () => {
  return (
    <div>
      <Home />
      <Navbar />
      <Player />
      <Login />
      <TitleCards />
    </div>
  );
}

export default App

