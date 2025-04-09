import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container">
                <h1>Get In Contact With Us</h1>


        <div className="contact-header">


        <div className="restaurant-info">
            <div className='descriptions'>
                <h2>Le Savor</h2>
                <p> Welcome to <span>Le Savor</span> – where world-class cuisine meets local hospitality.
                Join us for an unforgettable dining experience!</p>
            </div>

            <div className="contact-details">
                <h4> 123 Flavour Street, Culinary City, 1234</h4>
                <h4> (123) 456-7890</h4>
                <h4> reservations@lesavor.co.nz</h4>
            </div>
       
        </div>

        {/* Contact Form */}
      <div className="contact-form">
        <h2 className="section-heading">Send us a message</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your name" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your email" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" placeholder="Your message"></textarea>
          </div>

          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
        </div>


    
    </div>
  );
};

export default Contact;
