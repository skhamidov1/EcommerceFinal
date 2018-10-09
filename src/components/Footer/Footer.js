import React from "react";
import { Link } from "react-router-dom";

const footer = () => {
  return (
    <footer className="footer">
      <div className="footer__connected-wrap">
        <h2>Stay Connected</h2>
        <p>
          Join Our NewsLetter To Recieve Updates
          <br /> On Our Cars. 10,000+ people have joined!
        </p>
        <form>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
            <input type="submit" />
          </div>
        </form>
        <div className="footer__icon-wrap">
          <a href="https://www.facebook.com">
            <img src="/static/img/facebook.svg" alt="Facebook Link" />
          </a>
          <a href="https://www.instagram.com">
            <img src="/static/img/instagram.svg" alt="Instagram Link" />
          </a>
          <a href="https://www.twitter.com">
            <img src="/static/img/twitter.svg" alt="Twitter Link" />
          </a>
          <a href="https://www.plus.google.com">
            <img src="/static/img/googleplus.svg" alt="Google Plus Link" />
          </a>
        </div>
      </div>
      <div className="footer__commited-wrap">
        <h2>Commited To The East</h2>
        <div className="footer__commited-description-wrap">
          <p>
            We are a proud member of the east coast and are commited to provide
            the best service for the occasion. From birthdays to anniversaries
            to holidays, celebrate every special occasion in luxury. Rent a
            fast, exotic ride and make a memory you’ll never forget.
          </p>
          <img src="/static/img/crown.svg" alt="RoyalRentals Logo" />
        </div>
      </div>
      <nav className="footer__nav">
        <h2>Navigate</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/inventory">Products</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>Our Team</a>
          </li>
          <li>
            <a>Events</a>
          </li>
          <li>
            <a>Support</a>
          </li>
          <li>
            <a>Careers</a>
          </li>
        </ul>
      </nav>
      <ul className="footer__privacy-list">
        <li>
          <a>Privacy Policy</a>
        </li>
        <li>
          <a>Site Map</a>
        </li>
        <li>
          <a>&copy;Education Purposes Only</a>
        </li>
      </ul>
    </footer>
  );
};

export default footer;
