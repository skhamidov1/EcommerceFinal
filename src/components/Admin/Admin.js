import React from "react";
import AdminCard from "../AdminCard/AdminCard";

const admin = props => {

  const card = props.cars.map((car, i) => {
    return (
      <AdminCard
        key={i}
        category={car.category}
        image={car.image}
        name={car.name}
        rentPrice={car.rentPrice}
        _id={car._id}
        carId= {car.carId}
      />
    );
  });
  return (
    <div className="cards-container">
      <div className="heading-container">
        <h1>Manage Inventory</h1>
        <button className="new-car-button">Add New Car</button>
      </div>

      <div className="header-card">
        <p className="img-header">Image</p>
        <p className="name-header">Name</p>
        <p className="category-header">Category</p>
        <p className="rent-header">Rent Price</p>
        <p className="id-header">Id</p>
        <p className="modify-header">Modify</p>
      </div>
      {card}
    </div>
  );
};

export default admin;
