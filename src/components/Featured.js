import React from 'react'
import './Featured.css'

function Featured() {
  return (
    <>
      <section id="featured" className="featured">
        <h2>Discover Your Future Best Friend</h2>
        <div className="pet__cards">
          <div className="pet__card">
            <div className="pet__image">
              <img src="https://heronscrossing.vet/wp-content/uploads/Golden-Retriever-1024x683.jpg" alt="Buddy the Golden Retriever" />
            </div>
            <div className="pet__info">
              <h3>Buddy the Golden Retriever</h3>
              <p>A loyal and gentle soul, Buddy is your go-to adventure buddy. Whether it's hikes or snuggles, he's always by your side.</p>
              <a href="#" className="learn__more">Learn More</a>
            </div>
          </div>
          <div className="pet__card">
            <div className="pet__image">
              <img src="https://spca.bc.ca/wp-content/uploads/adoption-kamloops-community-animal-centre-cat-luna-d.jpg" alt="Luna the Playful Tabby" />
            </div>
            <div className="pet__info">
              <h3>Luna the Playful Tabby</h3>
              <p>Luna's playful antics and soft purrs will light up your days. She's ready to fill your home with joy and whisker kisses.</p>
              <a href="#" className="learn__more">Learn More</a>
            </div>
          </div>
          <div className="pet__card">
            <div className="pet__image">
              <img src="https://a-z-animals.com/media/2021/11/Siberian-Husky-1.jpg" alt="Max the Energetic Husky" />
            </div>
            <div className="pet__info">
              <h3>Max the Energetic Husky</h3>
              <p>Max is all about excitement and energy. If you're an active soul seeking a spirited partner, he's your perfect match.</p>
              <a href="#" className="learn__more">Learn More</a>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Featured