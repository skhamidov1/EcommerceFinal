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
    filterValue: []
  };

  componentDidMount() {
    
    fetch("https://sk-sqlapi.herokuapp.com/inventory")
      .then(response => response.json())
      .then(json => this.setState({cars: json}));

    fetch("https://sk-sqlapi.herokuapp.com/form_submission")
      .then(response => response.json())
      .then(json => this.setState({contactInfo: json}));
  }

  showImageDescription = e => {
    // Adds a display property to the cars and filtered array to add description overlay
    let filteredCars = [];
    let normalCars = [];
    let id = Number(e.target.dataset.id)

    if (this.state.filterArray.length > 0) {
      filteredCars = this.state.filterArray.map(car => {
        return car.carId === id
          ? { ...car, display: !car.display }
          : car;
      });

      this.setState({
        filterArray: filteredCars
      });
    } else {
      normalCars = this.state.cars.map(car => {
        return car.carId === id
          ? { ...car, display: !car.display }
          : car;
      });

      this.setState({
        cars: normalCars
      });
    }
  
  };
  filterSelect = () => {
    let filterPrice = document.querySelector(".products-header__price-select")
      .value;
    let filterCar = document.querySelector(".products-header__type-select")
      .value;

    let newCarsArray = [...this.state.cars]

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

  toggleMobileNav = () => { // opens mobile nav
    let mobileNav = document.querySelector(".mobileNav");

    if (mobileNav.style.right === "-100vw") {
      mobileNav.style.right = "0";
    } else {
      mobileNav.style.right = "-100vw";
    }
  };
  deleteCar = (id) => {
    // Deletes car with object id with fetch and updates cars
    // array in state with spliced one
    let newCars = [...this.state.cars]

    fetch(`https://sk-sqlapi.herokuapp.com/inventory/${id}`, {
      method: "delete"
    })
    let index = newCars.findIndex(x => x.carId === Number(id));
    newCars.splice(index, 1)

    this.setState({
      cars: newCars
    })
  };

  filterInputValues = (id) => {   // contains the object with the information based on the car user clicks on 
    let selection = [...this.state.cars]
    let newInput = selection.filter(input => input.carId === id)
    this.setState({filterValue: newInput})
  }
  getPutInfo = (id) => {
    const editForm = document.getElementById("edit-modal-form")

    const putInfo = {
      image: editForm.elements[0].value,
      name: editForm.elements[1].value,
      category: editForm.elements[2].value,
      rentPrice: Number(editForm.elements[3].value),
      price: Number(editForm.elements[4].value),
      engine: editForm.elements[5].value,
      description: editForm.elements[6].value,
    }
    fetch(`https://sk-sqlapi.herokuapp.com/inventory/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(putInfo)
    }).then(res => console.log(res));
    console.log(putInfo)
    // window.location.reload();
    let carsTemp = [...this.state.cars]
    let index = carsTemp.findIndex(object => object.carId === id);
    carsTemp[index] = putInfo
    this.setState({cars: carsTemp})
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
          <Header toggleMobileNav={this.toggleMobileNav} />

          <MobileNav toggleMobileNav={this.toggleMobileNav} />

          <Switch>
            <Route exact path="/callback" component={Callback} />

            <Route exact path="/" component={Home} />

            <Route path="/inventory" render={() => <Products cars={cars}
            showImageDescription = {this.showImageDescription}
            searchBar = {this.searchBarHandler}
            showAllVehicles = {this.showAllVehicles}
            selectFilter = {this.filterSelect} /> }/>

            <Route path="/contact" component={Contact} />

            <SecuredRoute path='/admin/contactInfo' component={ContactInfo} // Contact Submissions
            contactInfo={this.state.contactInfo}/>}/>

            <SecuredRoute exact path='/admin' component={Admin}   // Products 
            cars={cars} filterValue={this.state.filterValue} filteredValFunc={this.filterInputValues}
            deleteCarFunc={this.deleteCar} getPutInfo={this.getPutInfo}/>
          </Switch>

          <Footer />
        </div>

      </BrowserRouter>
    );
  }
}

export default App;
