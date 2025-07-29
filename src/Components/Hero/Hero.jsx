import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import profile_img from '../../assets/profile_img.svg' 
const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="Hero" />
      <h1><span>I,m Krishna,</span> frontend developer based in Balasore</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit at deserunt quidem sit quos dolorum cumque amet, architecto vero porro.
      </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
