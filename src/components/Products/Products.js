import React, { Component } from "react";
import CarsCard from "../CarsCard/CarsCard";
import SelectTags from "../SelectTags/SelectTags";
import RentModal from "../RentModal/RentModal";
class Products extends Component {
  state = {
    cars: [],
    filterArray: [],
    showModal: false
  };

  componentDidMount() {
    const url = "http://localhost:3001/inventory";
    fetch(url)
      .then(response => response.json())
      .then(json => this.setState({cars: json}));
  }

  showImageDescription = e => {
    // Adds a display property to the cars array to add description overlay
    let newCars = [];
    newCars = this.state.cars.map(car => {
      return car.carId === Number(e.target.dataset.id)
        ? { ...car, display: !car.display }
        : car;
    });

    this.setState({
      cars: newCars
    });
    //
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

  render() {
    let cars = [];

    if (this.state.filterArray.length > 0) {
      cars = this.state.filterArray;
    } else {
      cars = this.state.cars;
    }

    const card = cars.map((car, i) => {
      return (
        <CarsCard
          key={i}
          description={car.description}
          image={car.image}
          name={car.name}
          price={car.price}
          rentPrice={car.rentPrice}
          engine={car.engine}
          carId={car.carId}
          showImageDescription={this.showImageDescription}
          car={car}
          showModal={this.showModalFunction}
        />
      );
    });

    return (
      <div>
        <SelectTags
          search={this.searchBarHandler}
          showVehicles={this.showAllVehicles}
          filterSelect={this.filterSelect}
        />
        <div className="products-wrap">{card}</div>
        {this.state.showModal && (
          <RentModal modalShow={this.showModalFunction} />
        )}
      </div>
    );
  }
}

export default Products;
