import React from "react";

const addModal = props => {
  return (
    <div className="edit-add-modal-overlay" ref={props.addModalRef}>
      <form
        method="post"
        action="http://localhost:3306/inventory"
        className="edit-add-modal-form"
      >
        <div className="edit-add-modal-heading">
          <h2>Fill out the information to add a car</h2>
        </div>
        <div className="edit-add-modal-input-wrap">
          <label htmlFor="image">Img Url</label>
          <input type="text" required name="image" id="image" />
        </div>
        <div className="edit-add-modal-input-wrap">
          <label htmlFor="name">Name</label>
          <input type="text" required name="name" id="name" />
        </div>
        <div className="edit-add-modal-input-wrap">
          <label htmlFor="category">Category</label>
          <input type="text" required name="category" id="category" />
        </div>
        <div className="edit-add-modal-input-wrap">
          <label htmlFor="rentPrice">Rent Price</label>
          <input type="number" required name="rentPrice" id="rentPrice" />
        </div>
        <div className="edit-add-modal-input-wrap">
          <label htmlFor="price">Price</label>
          <input type="number" required name="price" id="price" />
        </div>
        <div className="edit-add-modal-input-wrap">
          <label htmlFor="engine">Engine</label>
          <input type="text" required name="engine" id="engine" />
        </div>
        <div className="edit-add-modal-input-wrap">
          <label htmlFor="description">Description</label>
          <textarea name="description" required id="description" />
        </div>
        <div className="edit-add-modal-buttons-wrap">
          <button
            type="button"
            onClick={() => props.toggleModal(null,"add")}
            className="edit-add-modal-button edit-add-modal-button--color"
          >
            Cancel
          </button>
          <button className="edit-add-modal-button">Add</button>
        </div>
      </form>
    </div>
  );
};

export default addModal;
