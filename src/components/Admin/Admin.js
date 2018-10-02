import React from "react";
import { Link } from "react-router-dom";
import AdminCard from "../AdminCard/AdminCard";
import EditModal from "../EditModal/EditModal";
import DeleteModal from "../DeleteModal/DeleteModal";
import AddModal from "../AddModal/AddModal";

const admin = props => {

  const toggleEditModal = id => {
    // Opens and Closes Edit Modal
    let editOverlay = document.querySelector(".edit-add-modal-overlay")
    editOverlay.style.display = editOverlay.style.display === "flex" ? "none" : "flex";
    document.querySelector(".edit-add-modal-overlay").setAttribute("data-objectId", id)
  };

  const toggleDeleteModal = id => {
    let deleteOverlay = document.querySelector(".delete-overlay")
    deleteOverlay.style.display = deleteOverlay.style.display === "flex" ? "none" : "flex";
    document.querySelector(".delete-overlay").setAttribute("data-objectId", id)
  };

  const toggleAddModal = id => {
    // Opens and Closes Add Modal
    let addOverlay = document.getElementById("add-modal-overlay")
    addOverlay.style.display = addOverlay.style.display === "flex" ? "none" : "flex";
  };

  const deleteCar = (id) => {
    // Deletes car with object id
    fetch(`http://localhost:3001/inventory/${id}`, {
      method: "delete"
    }).then(toggleDeleteModal)
  };

  const card = props.cars.map(car => {
    return (
      <AdminCard
        carDetails={car}
        key={car._id}
        toggleEditModal={toggleEditModal}
        toggleDeleteModal={toggleDeleteModal}
      />
    );
  });

  return (
    <div>
      <DeleteModal
      toggleDeleteModal={toggleDeleteModal}
      deleteCarFunction={deleteCar}
      />
      <EditModal toggleEditModal={toggleEditModal}
       />
       <AddModal toggleAddModal={toggleAddModal}/>
      <div className="cards-container">
        <div className="heading-container">
          <h1>Manage Inventory</h1>
          <div>
            <button className="new-car-btn heading-btn"
            onClick={toggleAddModal}>Add New Car</button>
            <Link
              to="/admin/contactInfo"
              role="button"
              className="contact-submission-btn heading-btn">
              Contact Submissions
            </Link>
          </div>
        </div>
        <div className="header-card">
          <p className="img-header">Image</p>
          <p className="name-header">Name</p>
          <p className="category-header">Category</p>
          <p className="rent-header">Rent Price</p>
          <p className="id-header">Id</p>
          <p className="modify-header">Modify</p>
        </div>
        {card}
      </div>
    </div>
  );
};

export default admin;
