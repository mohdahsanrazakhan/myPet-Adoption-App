import React from 'react'
import { Link } from 'react-router-dom';
import './Hero.css'
import HeroImage from '../assets/hero-image.png'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

function Hero() {

  return (
    <>
      <section id="hero" className="hero">
        <div className="hero__leftside">
          <h1 className='hero__quote'>Welcome to PetAdopt - Find Your Perfect Companion</h1>
          <Link to='/petadoption' className='hero__button'>find your pet <span className='hero__openIcon'><OpenInNewIcon /></span></Link>
        </div>
        <div className="hero__rightside">

          <img className='hero__image' src={HeroImage} alt="hero image" />
        </div>
      </section>
    </>
  )
}

export default Hero