import React from 'react'
import '../styles/home.css'
import {Link} from 'react-router-dom';
import BannerImage from '../assets/chambana.webp'

function Home() {
  return (
    <div className = 'home' style={{  backgroundImage: `url(${BannerImage})`}}>
        <div className="headerContainer">
            <h1> Welcome to APT4U</h1>
            <p>A Price Predictor for Apartments in the Urbana-Champaign Area</p>
            <Link to="/predictionpage">
                <button>Get Started</button>
            </Link>
        </div>
    </div>
  )
}

export default Home