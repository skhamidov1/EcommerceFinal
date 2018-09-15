import React from "react";

const card = props => {
  let displayClass = props.car.display ? "displayFlex" : "displayNone";
  return (
    <div className="products-wrap__card">
      <div className="products-wrap__img-wrap">
        <div className={`products-wrap__img-wrap-overlay ${displayClass}`}>
          <p>{props.description}</p>
        </div>
        <img src={props.image} alt="Lambo" />
      </div>

      <div className="products-wrap__description-wrap">
        <h2>{props.name}</h2>
        <p>Price: {props.price}</p>
        <p>Rent: ${props.rentPrice.toLocaleString('en')} / Day</p>
        <p>Engine: {props.engine}</p>
        <button
          className="card-button"
          onClick={props.handleClick}
          data-id={props.carId}
        >
          Description
        </button>
        <button onClick={props.showModal} className="card-button card-button--color">Rent Now</button>
      </div>
    </div>
  );
};

export default card;
