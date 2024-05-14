import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile-pic-2.png'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt=''/>
        <h1><span>I'm Akanimo,</span> Artist and Entreprenuer.</h1>
        <p>I make music for the soul and create innovative ideas, want to explore my mind and world? Choose Below 👇</p>
        <div className="hero-action">
            <div className="hero-connect">My Music</div>
            <div className="hero-resume">My Business</div>
        </div>
    </div>
  )
}

export default Hero