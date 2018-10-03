import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./assets/CSS/App.css";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import MobileNav from "./components/MobileNav/MobileNav";
import Products from "./components/Products/Products";
import Contact from "./components/Contact/Contact";
import Admin from "./components/Admin/Admin";
import Footer from "./components/Footer/Footer";
import Callback from "./components/Callback/Callback"
import SecuredRoute from './components/SecuredRoute/SecuredRoute';
import ContactInfo from "./components/ContactInfo/ContactInfo";

class App extends Component {
  state = {
    cars: [],
    contactInfo: [],
    filterArray: [],
    showModal: false,
    filterValues: []
  };

  componentDidMount() {
    
    fetch("http://localhost:3001/inventory")
      .then(response => response.json())
      .then(json => this.setState({cars: json}));

    fetch("http://localhost:3001/form_submission")
      .then(response => response.json())
      .then(json => this.setState({contactInfo: json}));
  }

  showImageDescription = e => {
    // Adds a display property to the cars array to add description overlay
    let newCars = [];
    newCars = this.state.cars.map(car => {
      return car._id === e.target.dataset.id
        ? { ...car, display: !car.display }
        : car;
    });

    this.setState({
      cars: newCars
    });
    
    // Adds a display property to the filtered array to add description overlay
    let showFilteredOverlay = [];
    if (this.state.filterArray.length > 0) {
      showFilteredOverlay = this.state.filterArray.map(car => {
        return car.carId === Number(e.target.dataset.id)
          ? { ...car, display: !car.display }
          : car;
      });
      this.setState({
        filterArray: showFilteredOverlay
      });
    }
  };
  filterSelect = () => {
    let filterPrice = document.querySelector(".products-header__price-select")
      .value;
    let filterCar = document.querySelector(".products-header__type-select")
      .value;

    let newCarsArray = this.state.cars;

    if (filterCar !== "None") {
      newCarsArray = newCarsArray.filter(car => car.category === filterCar);
    }
    if (filterPrice !== "None") {
      newCarsArray = newCarsArray.filter(car => {
        const priceParts = filterPrice.split("-");
        const lowerPrice = priceParts[0];
        const higherPrice = priceParts[1];

        if (higherPrice) {
          return (
            car.rentPrice >= lowerPrice &&
            car.rentPrice <= higherPrice
          );
        }
        return car.rentPrice >= lowerPrice;
      });
    }
    this.setState({
      filterArray: newCarsArray
    })
  };
 
  showAllVehicles = () => {
    if (this.state.filterArray.length > 0) {
      document.querySelector(".products-header__type-select").value = "None";
      document.querySelector(".products-header__price-select").value = "None";
      this.setState({
        filterArray: this.state.cars
      });
    }
  };
  searchBarHandler = e => {
    e.preventDefault();
    let searchInput = document.querySelector(".search-bar").value;
    let searchResults = this.state.cars.filter(
      currentItem =>
        currentItem.name.toLowerCase().includes(searchInput.toLowerCase())
          ? true
          : false
    );
    this.setState({
      filterArray: searchResults
    });
    document.querySelector(".search-bar").value = "";
  };

  showModalFunction = e => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  openNav = () => {
    var hamburgerNav = document.querySelector(".mobileNav");

    if (hamburgerNav.style.right === "-100vw") {
      hamburgerNav.style.right = "0";
    } else {
      hamburgerNav.style.right = "-100vw";
    }
  };
  deleteCar = (id) => {
    // Deletes car with object id with fetch and updates cars
    // array in state with spliced one
    let newCars = [...this.state.cars]

    fetch(`http://localhost:3001/inventory/${id}`, {
      method: "delete"
    })
    let index = newCars.findIndex(x => x._id === id);
    newCars.splice(index, 1)

    this.setState({
      cars: newCars
    })
  };
  filterInputValues = (id) => {
    let selection = [...this.state.cars]
    let newInput = selection.filter(input => input._id === id)
    console.log(newInput)
    this.setState({filterValues: newInput})
  }
  render() {
    let cars = [];

    if (this.state.filterArray.length > 0) {
      cars = this.state.filterArray;
    } else {
      cars = this.state.cars;
    }

    return (
      <BrowserRouter>

        <div>
          <Header closeMobileNav={this.openNav} />

          <MobileNav closeMobileNav={this.openNav} />

          <Switch>
            <Route exact path="/callback" component={Callback} />

            <Route exact path="/" component={Home} />

            <Route path="/inventory" render={() => <Products showModalFunc={this.showModalFunction} cars={cars}
            showImageDescription = {this.showImageDescription}
            modalShow = {this.state.showModal}
            searchBar = {this.searchBarHandler}
            showAllVehicles = {this.showAllVehicles}
            selectFilter = {this.filterSelect} /> }/>

            <Route path="/contact" component={Contact} />

            <SecuredRoute path='/admin/contactInfo' component={ContactInfo} // Contact Submissions
            contactInfo={this.state.contactInfo}/>}/>

            <SecuredRoute exact path='/admin' component={Admin}   // Products 
            cars={cars} filterValue={this.state.filterValues} filteredValFunc={this.filterInputValues}
            deleteCarFunc={this.deleteCar}/>
          </Switch>

          <Footer />
        </div>

      </BrowserRouter>
    );
  }
}

export default App;
