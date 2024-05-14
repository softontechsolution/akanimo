import React from 'react'
import {Link} from 'react-router-dom'
import './Hero.css'
import profile_img from '../../assets/profile-pic-2.png'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt=''/>
        <h1><span>I'm Akanimo,</span> Artist and Entreprenuer.</h1>
        <p>I make music for the soul and create innovative ideas, want to explore my mind and world? Choose Below 👇</p>
        <div className="hero-action">
            <Link to='/music' className='link'><div className="hero-connect">My Music</div></Link> 
            <Link to='/business' className='link'><div className="hero-resume">My Business</div></Link> 
        </div>
    </div>
  )
}

export default Hero