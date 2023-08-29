import React from 'react';
import ContactImage from '../assets/contact.png'
import './Contact.css';

const Contact = () => {

  return (
    <div id='contact' className='contact'>
      <img src={ContactImage} alt="" />
      <div>
        <h2>Contact Us</h2>
        <form className='contact__form'>
          <div className='contact__inputs'>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className='contact__inputs'>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className='contact__inputs'>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
