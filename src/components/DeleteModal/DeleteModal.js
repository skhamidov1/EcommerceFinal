import React from "react";

const deleteModal = props => {
  const getAttribute = () => {
    const id = props.deleteModalRef.current.dataset.objectid;
    return id;
  };

  return (
    <div className="delete-overlay" data-objectid="" ref={props.deleteModalRef}>
      <div className="delete-modal">
        <p className="delete-modal__question">
          Are You Sure You Want To Delete?
        </p>
        <div className="delete-modal__btns-wrap">
          <button
            type="button"
            className="delete-modal__btn delete-modal__btn--no"
            onClick={() => props.toggleModal(null, "del")}
          >
            No
          </button>
          <button
            type="button"
            className="delete-modal__btn delete-modal__btn--yes"
            onClick={() => {
              props.deleteCarFunction(getAttribute());
              props.toggleModal(null, "del");
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
