import React from "react";
import CarsCard from "../CarsCard/CarsCard";
import SelectTags from "../SelectTags/SelectTags";
import RentModal from "../RentModal/RentModal";

const Products = props => {
  const showRentModal = () => {
    let rentModalWrap = document.querySelector(".modal-wrap");
    rentModalWrap.style.display =
      rentModalWrap.style.display === "flex" ? "none" : "flex";
  };

  const card = props.cars.map((car, i) => {
    return (
      <CarsCard
        key={i}
        showImageDescription={props.showImageDescription}
        showRentModal={showRentModal}
        car={car}
      />
    );
  });

  return (
    <div>
      <SelectTags
        search={props.searchBar}
        showVehicles={props.showAllVehicles}
        filterSelect={props.selectFilter}
      />
      <div className="products-wrap">{card}</div>
      <RentModal showRentModal={showRentModal} />
    </div>
  );
};

export default Products;
