import React from "react";

const editModal = (props) => {
  // const { carDetails } = props

  const getAttribute = () => {
    const id = document.querySelector(".edit-add-modal-overlay").getAttribute("data-objectid")
    return id
  }

  const getPutInfo = (id) => {
    const editForm = document.getElementById("edit-modal-form")

    const putInfo = {
      image: editForm.elements[0].value,
      name: editForm.elements[1].value,
      category: editForm.elements[2].value,
      rentPrice: editForm.elements[3].value,
      price: editForm.elements[4].value,
      engine: editForm.elements[5].value,
      description: editForm.elements[6].value,
    }
    console.log(putInfo)
    fetch(`http://localhost:3001/inventory/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(putInfo)
    }).then(res => console.log(res));
    window.location.reload();
  }
  
  return (
    <div className="edit-add-modal-overlay" data-objectid="">
      <form className="edit-add-modal-form" id="edit-modal-form">
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

        {(props.filterValue.length > 0) ?  // ask for help
        <div className="edit-add-modal-input-wrap">
          <label htmlFor="description">Description</label>
          <textarea  name="description" defaultValue={props.filterValue[0].description}
          id="description"></textarea>
        </div> : null}

        <div className="edit-add-modal-buttons-wrap">
          <button type="button" className="edit-add-modal-button edit-add-modal-button--color"
           onClick={props.toggleEditModal}
          >Cancel</button>
          <button onClick={() => getPutInfo(getAttribute())}
           type="button" className="edit-add-modal-button">Update</button>
        </div>
      </form>
    </div>
  );
};

export default editModal;
