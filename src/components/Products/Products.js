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
    const url = "https://api.jsonbin.io/b/5b9aa0c274ca4633aadc4707";
    fetch(url)
      .then(response => response.json())
      .then(json =>
        this.setState({
          cars: json.cars
        })
      );
  }

  handleClick = e => {
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

  priceSort = () => {
    // Function handles the filter for sorting by the price
    let filterPrice = document.querySelector(".products-header__price-select")
      .value;
    // let priceArray = [];
    // if (this.state.filterArray.length > 0) {
    //   priceArray = this.state.filterArray;
    // }else {
    //   priceArray = this.state.cars;
    // }
    let priceResults = this.state.cars.filter(currentItem => {
      const priceParts = filterPrice.split("-");
      const lowerBound = priceParts[0];
      const higherBound = priceParts[1];

      if (higherBound) {
        return (
          currentItem.rentPrice >= lowerBound &&
          currentItem.rentPrice <= higherBound
        );
      }
      return currentItem.rentPrice >= lowerBound;
    });

    this.setState({
      filterArray: priceResults
    });
  };
  typeSort = () => {
    // Function handles the filter for sorting by the type of car
    let filterCar = document.querySelector(".products-header__type-select")
      .value;

    // let typeArray = [];
    // if (this.state.filterArray.length > 0) {
    //   typeArray = this.state.filterArray;
    // } else {
    //   typeArray = this.state.cars;
    // }
    let typeResults = this.state.cars.filter(
      currentItem => currentItem.category === filterCar
    );

    this.setState({
      filterArray: typeResults
    });
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
    document.querySelector(".products-header__type-select").value = "None";
    document.querySelector(".products-header__price-select").value = "None";
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
          handleClick={this.handleClick}
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
          priceSort={this.priceSort}
          typeSort={this.typeSort}
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
