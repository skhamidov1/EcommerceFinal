import React from "react";

const contactInfoCard = props => {
  const { cardInfo } = props;

  return (
    <div>
      <div className="info-card">
        <ul className="info-card__unord-list">
          <li>{cardInfo.firstName}</li>
          <li>{cardInfo.lastName}</li>
          <li>{cardInfo.email}</li>
          <li>{cardInfo.phone}</li>
          <li>
            <a onClick={() => props.toggleComments(cardInfo._id)}>Show Comments</a>
          </li>
        </ul>
      </div>
      <div id={cardInfo._id} className="info-card__overlay">
        <div className="info-card__comments-modal">
          <p>{cardInfo.comments}</p>
          <button
            type="button"
            onClick={() => props.toggleComments(cardInfo._id)}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default contactInfoCard;
