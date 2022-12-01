import React from 'react'
import campustown from '../assets/campustown.jpg'
import '../styles/about.css'

function About() {
  return (
    <div className="about">
      <div className="aboutTop" style={{  backgroundImage: `url(${campustown})`}}>asdf</div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>At apt4U, our primary goal is to help students find apartments that meet their needs and wants, while being in their price range. Through our services, users will be able to interact with our prediction models to understand the estimated prices of apartments across campus for years to come. Moreover, we will be providing a user preference system that recommends apartments based on the users responses as the service recommends sample apartments that meet their specificed criteria. Overall, we are a group of driven students ready to make a difference throughout Champaign-Urbana through our experience and passion in computer science.</p>
      </div>
    </div>
  )
}

export default About