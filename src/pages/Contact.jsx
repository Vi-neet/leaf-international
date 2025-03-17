import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear the error for this field when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };
  
  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    
    return errors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true);
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };
  
  return (
    <div className="contact-page">
      {/* Contact Hero */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Get in touch with our team.</p>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="contact-information">
        <div className="contact-container">
          <div className="contact-info-grid">
            <div className="contact-info-item">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3>Visit Our Showroom</h3>
              <p>123 Design Street, Suite 500</p>
              <p>Luxury Lane, CA 90210</p>
            </div>
            
            <div className="contact-info-item">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <h3>Call Us</h3>
              <p>Sales: (555) 123-4567</p>
              <p>Support: (555) 987-6543</p>
            </div>
            
            <div className="contact-info-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h3>Email Us</h3>
              <p>info@luxeflow.com</p>
              <p>support@luxeflow.com</p>
            </div>
            
            <div className="contact-info-item">
              <div className="contact-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h3>Business Hours</h3>
              <p>Monday - Friday: 9am - 6pm</p>
              <p>Saturday: 10am - 4pm</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form & Map */}
      <section className="contact-form-section">
        <div className="contact-container">
          <div className="contact-form-map">
            <div className="contact-form-wrapper">
              <h2>Send Us a Message</h2>
              
              {formSubmitted ? (
                <div className="form-success">
                  <div className="success-icon">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <h3>Thank You!</h3>
                  <p>Your message has been sent successfully. We'll get back to you shortly.</p>
                  <button className="btn btn-primary" onClick={() => setFormSubmitted(false)}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Your Name *</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        className={formErrors.name ? 'error' : ''}
                      />
                      {formErrors.name && <span className="error-message">{formErrors.name}</span>}
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        className={formErrors.email ? 'error' : ''}
                      />
                      {formErrors.email && <span className="error-message">{formErrors.email}</span>}
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="subject">Subject *</label>
                      <input 
                        type="text" 
                        id="subject" 
                        name="subject" 
                        value={formData.subject}
                        onChange={handleChange}
                        className={formErrors.subject ? 'error' : ''}
                      />
                      {formErrors.subject && <span className="error-message">{formErrors.subject}</span>}
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Your Message *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      className={formErrors.message ? 'error' : ''}
                    ></textarea>
                    {formErrors.message && <span className="error-message">{formErrors.message}</span>}
                  </div>
                  
                  <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
              )}
            </div>
            
            <div className="contact-map">
              <div className="map-placeholder">
                <img src="/images/map.jpg" alt="Location Map" />
                <div className="map-pin">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="faq-section">
        <div className="contact-container">
          <h2>Frequently Asked Questions</h2>
          
          <div className="faq-grid">
            <div className="faq-item">
              <h3>What is your warranty policy?</h3>
              <p>All LuxeFlow products come with a 10-year limited warranty covering defects in materials and workmanship under normal use.</p>
            </div>
            
            <div className="faq-item">
              <h3>Do you offer installation services?</h3>
              <p>Yes, we offer professional installation through our network of certified installers. Contact our sales team for more information.</p>
            </div>
            
            <div className="faq-item">
              <h3>What is your return policy?</h3>
              <p>We accept returns within 30 days of purchase for unused items in original packaging. Custom orders are non-returnable.</p>
            </div>
            
            <div className="faq-item">
              <h3>How long does shipping take?</h3>
              <p>Standard shipping takes 3-5 business days. Express shipping options are available at checkout.</p>
            </div>
            
            <div className="faq-item">
              <h3>Do you ship internationally?</h3>
              <p>Yes, we ship to select international destinations. International shipping rates and delivery times vary by location.</p>
            </div>
            
            <div className="faq-item">
              <h3>How do I track my order?</h3>
              <p>Once your order ships, you'll receive a confirmation email with tracking information and estimated delivery date.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Showroom Section */}
      <section className="showroom-section">
        <div className="contact-container">
          <div className="showroom-content">
            <div className="showroom-info">
              <h2>Visit Our Showroom</h2>
              <p>Experience our products in person at our designer showroom. Our knowledgeable staff will help you find the perfect fixtures for your space.</p>
              <ul className="showroom-features">
                <li><i className="fas fa-check"></i> Product demonstrations</li>
                <li><i className="fas fa-check"></i> Design consultations</li>
                <li><i className="fas fa-check"></i> Material samples</li>
                <li><i className="fas fa-check"></i> Special promotions</li>
              </ul>
              <p>We recommend scheduling an appointment for personalized assistance.</p>
              <button className="btn btn-secondary">Schedule a Visit</button>
            </div>
            
            <div className="showroom-images">
              <div className="showroom-image">
                <img src="/images/showroom-1.jpg" alt="LuxeFlow Showroom" />
              </div>
              <div className="showroom-image">
                <img src="/images/showroom-2.jpg" alt="LuxeFlow Showroom" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="newsletter-section">
        <div className="contact-container">
          <div className="newsletter-content">
            <div className="newsletter-info">
              <h2>Stay Updated</h2>
              <p>Subscribe to our newsletter for the latest product releases, design inspiration, and exclusive offers.</p>
            </div>
            
            <div className="newsletter-form">
              <form>
                <input type="email" placeholder="Enter your email address" required />
                <button type="submit" className="btn btn-primary">Subscribe</button>
              </form>
              <p className="newsletter-privacy">By subscribing, you agree to our <a href="#">Privacy Policy</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;