import React from 'react'
import './About.css'
import AboutImage from '../assets/about.png'

function About() {
  return (
    <>
      <section id='about' className="aboutUs">
        <h2>About Us</h2>
        <div className="about__content">
          <div className="about__image">
            <img src={AboutImage} alt="about-image" />
          </div>
          <div class="about__text">
            <p>Welcome to PetAdopt, where every pet has a story and every story matters. Our mission is to bring joy to both pets and people by connecting loving homes with furry companions in need. With a passion for animals and a commitment to responsible adoption, we're dedicated to making a difference one paw at a time.</p>
            <p>Founded by a team of pet lovers, our organization is driven by the belief that every pet deserves a loving home. We're not just a pet adoption platform; we're a community of compassionate individuals united by the shared goal of creating brighter futures for our four-legged friends.</p>
            <p>Join us on this heartwarming journey and be a part of something truly special. Whether you're looking to adopt, volunteer, or simply spread the love, PetAdopt welcomes you with open paws.</p>
            <a href="#" class="learn-more">Learn More</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default About