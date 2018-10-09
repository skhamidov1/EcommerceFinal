import React from "react";

const card = props => {
  const {car} = props
  let displayClass = car.display ? "displayFlex" : "displayNone";
  return (
    <div className="products-wrap__card">
      <div className="products-wrap__img-wrap">
        <div className={`products-wrap__img-wrap-overlay ${displayClass}`}>
          <p>{car.description}</p>
        </div>
        <img src={car.image} alt="Lambo" />
      </div>

      <div className="products-wrap__description-wrap">
        <h2>{car.name}</h2>
        <p>Price: ${car.price.toLocaleString("en")}</p>
        <p>Rent: ${car.rentPrice.toLocaleString("en")} / Day</p>
        <p>Engine: {car.engine}</p>
        <button
          className="card-button"
          onClick={props.showImageDescription}
          data-id={car._id}
        >
          Description
        </button>
        <button
          onClick={props.showRentModal}
          className="card-button card-button--color"
        >
          Rent Now
        </button>
      </div>
    </div>
  );
};

export default card;
