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
    document.querySelector(".delete-overlay").setAttribute("data-objectid", id)
  };

  const toggleAddModal = id => {
    // Opens and Closes Add Modal
    let addOverlay = document.getElementById("add-modal-overlay")
    addOverlay.style.display = addOverlay.style.display === "flex" ? "none" : "flex";
  };

  const card = props.cars.map(car => {
    return (
      <AdminCard
        carDetails={car}
        key={car._id}
        toggleEditModal={toggleEditModal}
        toggleDeleteModal={toggleDeleteModal}
        filterValueFunc={props.filterValFunc}
      />
    );
  });

  return (
    <div>
      <DeleteModal
      toggleDeleteModal={toggleDeleteModal}
      deleteCarFunction={props.deleteCarFunc}
      /> 
      <EditModal filterValue={props.filterValue}
      toggleEditModal={toggleEditModal}
      />
      <AddModal toggleAddModal={toggleAddModal}/>
      <div className="cards-wrap">
        <div className="cards-wrap__heading-wrap">
          <h1>Manage Inventory</h1>
          <div>
            <button className="cards-wrap__heading-btn new-car-btn"
            onClick={toggleAddModal}>Add New Car</button>
            <Link
              to="/admin/contactInfo"
              role="button"
              className="cards-wrap__heading-btn submissions-btn">
              Contact Submissions
            </Link>
          </div>
        </div>
        <ul className="cards-wrap__desc-card">
          <li className="cards-wrap__img-desc">Image</li>
          <li className="cards-wrap__name-desc">Name</li>
          <li className="cards-wrap__category-desc">Category</li>
          <li className="cards-wrap__rent-desc">Rent Price</li>
          <li className="cards-wrap__id-desc">Id</li>
          <li className="cards-wrap__modify-desc">Modify</li>
        </ul>
        {card}
      </div>
    </div>
  );
};

export default admin;
