import React from "react";
import { Link } from "react-router-dom";
import AdminCard from "../AdminCard/AdminCard";
import EditModal from "../EditModal/EditModal";
import DeleteModal from "../DeleteModal/DeleteModal";
import AddModal from "../AddModal/AddModal";

const admin = props => {

  const toggleModal = (carId, Id, className) => {
    if (className) {
      let overlay = document.querySelector(className);
      overlay.style.display =
        overlay.style.display === "flex" ? "none" : "flex";
      document.querySelector(className).setAttribute("data-objectid", carId);
    } else if (Id) {
      let overlay = document.getElementById(Id);
      overlay.style.display =
        overlay.style.display === "flex" ? "none" : "flex";
    }
  };

  const card = props.cars.map(car => {
    return (
      <AdminCard
        carDetails={car}
        key={car.carId}
        toggleModal={toggleModal}
        filterValueFunc={props.filterValFunc}
      />
    );
  });

  return (
    <div>
      <DeleteModal
        toggleModal={toggleModal}
        deleteCarFunction={props.deleteCarFunc}
      />
      <EditModal
        filterValue={props.filterValue}
        toggleModal={toggleModal}
      />
      <AddModal
        toggleModal={toggleModal}
      />
      <div className="cards-wrap">
        <div className="cards-wrap__heading-wrap">
          <h1>Manage Inventory</h1>
          <div>
            <button
              className="cards-wrap__heading-btn new-car-btn"
              onClick={() => toggleModal(null, "add-modal-overlay", null)}
            >
              Add New Car
            </button>
            <Link
              to="/admin/contactInfo"
              role="button"
              className="cards-wrap__heading-btn submissions-btn"
            >
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
