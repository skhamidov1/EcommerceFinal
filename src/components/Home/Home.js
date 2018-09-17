import React, { Component } from "react";

import { BrowserRouter, Route } from "react-router-dom";
import Hero from "../Hero/Hero";
import Products from "../Products/Products";
import FeaturedCars from "../FeaturedCars/FeaturedCars";

class Home extends Component {
  render() {
  
    return (
      <div>
        <Hero />
        <BrowserRouter>
          <Route path="/products" component={Products} />
        </BrowserRouter>
        <main>
        <div className="home-intro">
          <h2>RoyalRentals</h2>
          <p>
            Welcome to RoyalRentals, the premier exotic, sports and luxury car rental
            service. We are located in Charlotte, North Carolina, with delivary
            options thoughtout the whole eastcoast.
          </p>

          <p>
            Browse our selection of cars which vary from, Lamborghini, Ferrari,
            Mercedes, Audi, Nissan GTR, Mclaren, BMW and more.
          </p>
        </div>
        <FeaturedCars />
        <div className="home-service-hero">
          <div className="home-service-hero__overlay" />
          <div className="home-service-hero__desc-wrap">
            <h2>
              We Provide The Best Customer Service Hands Down. Beyond Your
              Expectations
            </h2>
            <p>We Make It Happen And You Leave Satisfied</p>
            <a href="">Rent Now</a>
          </div>
        </div>
        <div className="home-bottom-caption">
          <p>Stop Dreaming, Start Driving!</p>
          <a href="">Inventory</a>
        </div>
        </main>
      </div>
    );
  }
}

export default Home;
