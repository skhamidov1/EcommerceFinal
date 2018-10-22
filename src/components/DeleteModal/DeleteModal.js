import React from "react";

const deleteModal = props => {
  const getAttribute = () => {
    return document
      .querySelector(".delete-overlay")
      .getAttribute("data-objectid");
  };

  return (
    <div className="delete-overlay" data-objectid="">
      <div className="delete-modal">
        <p className="delete-modal__question">
          Are You Sure You Want To Delete?
        </p>
        <div className="delete-modal__btns-wrap">
          <button
            type="button"
            className="delete-modal__btn delete-modal__btn--no"
            onClick={() => props.toggleModal(null, null, ".delete-overlay")}
          >
            No
          </button>
          <button
            type="button"
            className="delete-modal__btn delete-modal__btn--yes"
            onClick={() => {
              props.deleteCarFunction(getAttribute());
              props.toggleModal(null, null, ".delete-overlay");
            }}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default deleteModal;
