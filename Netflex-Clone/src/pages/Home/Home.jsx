import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import herro_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={herro_banner} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />
          <p>
            Descovering his ties to a secret ancient order, young man living in
            modern istanbul embarks on a quest to save the city from an immortal
            enemy
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt="" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="" />
              More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards />
        <TitleCards />
        <TitleCards />
        <TitleCards />
      </div>
    </div>
  );
}

export default Home
 