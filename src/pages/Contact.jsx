import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false); // To show a success message after submission

  // Handle input field changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple form validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields.');
      return;
    }

    // For now, just log the form data to the console
    console.log('Form Submitted:', formData);

    // Optionally, you can send the data to a backend API here
    // Example: sendFormDataToBackend(formData);

    setFormSubmitted(true); // Show success message
    setFormData({ name: '', email: '', message: '' }); // Clear form fields
  };

  return (
    <div className="contact-container">
      <h1>Get In Contact With Us</h1>

      <div className="contact-header">
        <div className="restaurant-info">
          <div className="descriptions">
            <h2>Le Savor</h2>
            <p>
              Welcome to <span>Le Savor</span> – where world-class cuisine
              meets local hospitality. Join us for an unforgettable dining
              experience!
            </p>
          </div>

          <div className="contact-details">
            <h4>123 Flavour Street, Culinary City, 1234</h4>
            <h4>(123) 456-7890</h4>
            <h4>reservations@lesavor.co.nz</h4>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h2 className="section-heading">Send us a message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Send Message
            </button>
            {formSubmitted && (
            <p className="success-message">Your message has been sent!</p>
          )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
