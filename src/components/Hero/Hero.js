import React from "react";
import { Link } from "react-router-dom";

const hero = () => {

  return (
    <div className="hero-container">
      <div className="hero">
        <div className="hero__overlay" />
        <h1>Find Your Dream Car</h1>
        <p>Your fantasy car is closer than you think. Rent Now</p>
        <Link to="/products">Rent Now</Link>
      </div>
    </div>
  );
};

export default hero;
