import React from "react";

const adminCard = props => {

  const deleteCar = id => {
    fetch(`http://localhost:3001/inventory/${id}`, {
      method: "delete"
    });
    window.location.reload();
  };

  return (
    <div className="admin-card">
      <div className="admin-card__img-wrap">
        <img src={props.image} alt={props.name} />
      </div>

      <div className="admin-card__description-wrap">
        <p className="name-align">{props.name}</p>
        <p>{props.category}</p>
        <p>$ {props.rentPrice.toLocaleString("en")} </p>
        <p>{props._id}</p>
      </div>

      <div className="admin-card__edit-delete-wrap">
        <img src="../../../static/img/edit.svg" />
        <img src="../../../static/img/delete.svg" onClick={() => deleteCar(props._id)}/>
      </div>
    </div>
  );
};

export default adminCard;
