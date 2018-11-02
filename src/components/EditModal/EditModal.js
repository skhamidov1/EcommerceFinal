import React from "react";

const editModal = (props) => {
  
  const getAttribute = () => {
    const id = props.editModalRef.current.dataset.objectid
    return id
  }
  
  return (
    <div className="edit-add-modal-overlay" data-objectid="" ref={props.editModalRef}>
      <form className="edit-add-modal-form" id="edit-modal-form" onSubmit={(e) => {
          props.getPutInfo(e,getAttribute())
          props.toggleModal(null, "edit")
      }}>
        <div className="edit-add-modal-heading">
          <h2>Fill out the information to update car info</h2>
        </div>
        <div className="edit-add-modal-input-wrap">
          <label htmlFor="image">Img Url</label>
          <input type="text" defaultValue={(props.filterValue.length > 0) ?
            props.filterValue[0].image : null} name="image" id="image" />
        </div>

        <div className="edit-add-modal-input-wrap">
          <label htmlFor="name">Name</label>
          <input type="text" defaultValue={(props.filterValue.length > 0) ?
            props.filterValue[0].name : null} name="name" id="name" />
        </div>

        <div className="edit-add-modal-input-wrap">
          <label htmlFor="category">Category</label>
          <input type="text" defaultValue={(props.filterValue.length > 0) ?
            props.filterValue[0].category : null} name="category" id="category" />
        </div>

        <div className="edit-add-modal-input-wrap">
          <label htmlFor="rentPrice">Rent Price</label>
          <input type="text" defaultValue={(props.filterValue.length > 0) ?
            props.filterValue[0].rentPrice : null} name="rentPrice" id="rentPrice" />
        </div>

        <div className="edit-add-modal-input-wrap">
          <label htmlFor="price">Price</label>
          <input type="text" defaultValue={(props.filterValue.length > 0) ?
            props.filterValue[0].price : null} name="price" id="price" />
        </div>

        <div className="edit-add-modal-input-wrap">
          <label htmlFor="engine">Engine</label>
          <input type="text" defaultValue={(props.filterValue.length > 0) ?
            props.filterValue[0].engine : null} name="engine" id="engine"/>
        </div>

        {(props.filterValue.length > 0) ?
        <div className="edit-add-modal-input-wrap">
          <label htmlFor="description">Description</label>
          <textarea  name="description" defaultValue={props.filterValue[0].description}
          id="description"></textarea>
        </div> : null}

        <div className="edit-add-modal-buttons-wrap">
          <button type="button" className="edit-add-modal-button edit-add-modal-button--color"
           onClick={() => props.toggleModal(null, "edit")}
          >Cancel</button>
          <button 
           type="submit" className="edit-add-modal-button"
           >Update</button>
        </div>
      </form>
    </div>
  );
};

export default editModal;
