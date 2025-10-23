import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Column 1 */}
          <div className="footer-column logo-column">
            <div className="logo-section">
              <div className="logo-icon">🛍️</div>
              <h2 className="logo-title">Shopify</h2>
            </div>
            <p className="tagline">
              Your one-stop shop for everything new and exciting.
            </p>
          </div>

          {/* Column 2 */}
          <div className="footer-column">
            <h3 className="footer-heading">Shop</h3>
            <ul>
              <li><a href="#">New Arrivals</a></li>
              <li><a href="#">Deals</a></li>
              <li><a href="#">Categories</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer-column">
            <h3 className="footer-heading">Company</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="footer-column">
            <h3 className="footer-heading">Support</h3>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Shipping & Returns</a></li>
            </ul>
          </div>

          {/* Column 5 */}
          <div className="footer-column">
            <h3 className="footer-heading">Follow Us</h3>
            <div className="social-icons">
              <a href="#">📘</a>
              <a href="#">🐦</a>
              <a href="#">💬</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 Shopify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
