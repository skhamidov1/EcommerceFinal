import React from "react";

const deleteModal = (props) => {
    // const { carDetails } = props
  const getAttribute = () => {
    const id = document.querySelector(".delete-overlay").getAttribute("data-objectId")
    return id
  }

  return (
    <div className="delete-overlay" data-objectId="">
      <div className="delete-modal">
        <p className="delete-modal__question">Are You Sure You Want To Delete?</p>
        <div className="delete-modal__btns-wrap">
          <button type="button" className="delete-modal__btn delete-modal__btn--no"
          onClick={props.toggleDeleteModal}>
            No
          </button>
          <button type="button" className="delete-modal__btn delete-modal__btn--yes"
          onClick={() => props.deleteCarFunction(getAttribute())}>
          Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default deleteModal;