import React from 'react';
import './NewsletterSubscribe.css';

const NewsletterSubscribe = () => {
  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <h2 className="newsletter-title">Join Our Newsletter</h2>
        <p className="newsletter-description">
          Subscribe to get information about new products, special offers and promotions.
        </p>
        <form className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email"
            className="newsletter-input"
          />
          <button type="submit" className="newsletter-button">
            <span>Subscribe</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSubscribe;
