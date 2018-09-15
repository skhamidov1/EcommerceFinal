import React, { Component } from "react";
import './assets/CSS/App.css';
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import { BrowserRouter, Route } from "react-router-dom";
import Products from "./components/Products/Products";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/contact" component={Contact}/>
          </div>
        </BrowserRouter>
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
