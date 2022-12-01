import React from 'react'
import '../styles/home.css'
import {Link} from 'react-router-dom';
import BannerImage from '../assets/main.png'

function Home() {
  return (
    <div className = 'home' style={{  backgroundImage: `url(${BannerImage})`}}>
        <div className="headerContainer">
            <h1>Find The Apartment Right For You</h1>
            <Link to="/predictionpage">
                <button>Start Swiping Now</button>
            </Link>
            <p>Never Been Easier Before</p>
        </div>
    </div>
  )
}

export default Home