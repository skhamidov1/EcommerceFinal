import React from "react";


const adminCard = props => {
  const { carDetails } = props
  
  return (
    <div className="admin-card">
      <div className="admin-card__img-wrap">
        <img src={carDetails.image} alt={carDetails.name} />
      </div>

      <div className="admin-card__description-wrap">
        <p className="name-align">{carDetails.name}</p>
        <p>{carDetails.category}</p>
        <p>$ {carDetails.rentPrice.toLocaleString("en")} </p>
        <p className="admin-card__id"> {carDetails._id}</p>
      </div>

      <div className="admin-card__edit-delete-wrap">
        <img src="/static/img/edit.svg" onClick={() => {props.toggleEditModal(carDetails._id);
          props.filterValueFunc(carDetails._id)}} alt="Edit Card"/>
        <img src="/static/img/delete.svg" className="admin-card__delete-btn" 
        alt="Delete Card" onClick={() => props.toggleDeleteModal(carDetails._id)}/>
      </div>
   
    </div>
    
  );
};


export default adminCard;
