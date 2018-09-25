import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./assets/CSS/App.css";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import MobileNav from "./components/MobileNav/MobileNav";
import Products from "./components/Products/Products";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";


class App extends Component {
  openNav = () => {
    var hamburgerNav = document.querySelector(".mobileNav");

    if (hamburgerNav.style.right === "-100vw") {
      hamburgerNav.style.right = "0";
    } else {
      hamburgerNav.style.right = "-100vw";
    }
  };
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header closeMobileNav={this.openNav} />
          <MobileNav closeMobileNav={this.openNav} />
          <Route exact path="/" component={Home} />
          <Route path="/inventory" component={Products} />
          <Route path="/contact" component={Contact} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
