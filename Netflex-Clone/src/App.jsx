// import React from 'react'
import Home from './pages/Home/Home'
// import Navbar from "./components/Navbar/Navbar";
import Player from './pages/Player/Player'
// import TitleCards from './components/TitleCards/TitleCards'
// import Login from './pages/Login/Login'
// import Footer from './components/Footer/Footer';
//import Footer from './components/Footer/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './pages/Login/Login';



const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path='/player/:id' element={<Player />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App

