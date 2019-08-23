import React, { Component } from "react";
import { Link } from "react-router-dom";
import AdminCard from "../AdminCard/AdminCard";
import EditModal from "../EditModal/EditModal";
import DeleteModal from "../DeleteModal/DeleteModal";
import AddModal from "../AddModal/AddModal";

class Admin extends Component {
  deleteModalRef = React.createRef();
  editModalRef = React.createRef();
  addModalRef = React.createRef();

  toggleModal = (carId, modal) => {
    const editRef = this.editModalRef.current;
    const deleteRef = this.deleteModalRef.current;
    const addRef = this.addModalRef.current;

    if (modal === "edit") {
      //ASSIGN EDIT MODAL DATA ATTRIBUTE WITH ID
      editRef.dataset.objectid = carId;
      editRef.style.display =
        editRef.style.display === "flex" ? "none" : "flex";
    } else if (modal === "del") {
      //ASSIGN DELETE MODAL DATA ATTRIBUTE WITH ID
      deleteRef.dataset.objectid = carId;
      deleteRef.style.display =
        deleteRef.style.display === "flex" ? "none" : "flex";
    } else if (modal === "add") {
      addRef.style.display = addRef.style.display === "flex" ? "none" : "flex";
    }
  };
  render() {
    const card = this.props.cars.map(car => {
      return (
        <AdminCard
          carDetails={car}
          key={car.carId}
          toggleModal={this.toggleModal}
          filterValueFunc={this.props.filterValFunc}
        />
      );
    });
    return (
      <div>
        <DeleteModal
          toggleModal={this.toggleModal}
          deleteCarFunction={this.props.deleteCarFunc}
          deleteModalRef={this.deleteModalRef}
        />
        <EditModal
          filterValue={this.props.filterValue}
          toggleModal={this.toggleModal}
          editModalRef={this.editModalRef}
          getPutInfo={this.props.getPutInfo}
        />
        <AddModal
          toggleModal={this.toggleModal}
          addModalRef={this.addModalRef}
        />
        <div className="cards-wrap">
          <div className="cards-wrap__heading-wrap">
            <h1>Manage Inventory</h1>
            <div>
              <button
                className="cards-wrap__heading-btn new-car-btn"
                onClick={() => this.toggleModal(null, "add")}
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
  }
}

export default Admin;
