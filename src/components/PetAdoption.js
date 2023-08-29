import React, { useState, useEffect } from 'react';
import './PetAdoption.css';

const PetAdoption = () => {
  const [dogImage, setDogImage] = useState('');
  const [isInterested, setIsInterested] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchRandomDogImage();
  }, []);

  const fetchRandomDogImage = () => {
    fetch('https://random.dog/woof.json')
      .then(response => response.json())
      .then(data => {
        setDogImage(data.url);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching dog image:', error);
        setIsLoading(false);
      });
  };

  const handleNotInterested = () => {
    fetchRandomDogImage();
    setIsInterested(false);
  };

  const handleInterested = () => {
    setIsInterested(true);
  };

  return (
    <section id="adopt">
      <h2 className='adopt__title'>Random Dog Adoption</h2>
      {isLoading ? (
        <div className="adopt__loading">Loading...</div>
      ) : (
        <img className='adopt__image' src={dogImage} alt="Loading Pets..." />
      )}

      <div className='adopt__buttons'>
        {!isInterested ? (
          <button className='adopt__button' onClick={handleNotInterested}>Not Interested</button>
        ) : (
          <p className='adopt_message'>The adopted dog is on the way home! <br />Go Back!</p>
        )}

        {!isInterested && (
          <button className='adopt__button' onClick={handleInterested}>Interested</button>
        )}
      </div>
    </section>
  );
};

export default PetAdoption;
