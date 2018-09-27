import React from "react";
import CarsCard from "../CarsCard/CarsCard";
import SelectTags from "../SelectTags/SelectTags";
import RentModal from "../RentModal/RentModal";

const Products = (props) => {
  
    const card = props.cars.map((car, i) => {
      return (
        <CarsCard
          key={i}
          description={car.description}
          image={car.image}
          name={car.name}
          price={car.price}
          rentPrice={car.rentPrice}
          engine={car.engine}
          carId={car.carId}
          showImageDescription={props.showImageDescription}
          car={car}
          showModal={props.showModalFunc}
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
        {props.modalShow && (
          <RentModal modalShow={props.showModalFunc} />
        )}
      </div>
    );
  
}

export default Products;
