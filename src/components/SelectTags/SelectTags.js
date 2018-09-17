import React from "react";

const selectTags = (props) => {

  return (
    <div className="products-header">
      <div className="products-header__heading">
        <h1>Our Inventory</h1>
        <p>Explore Our Vehicles</p>
      </div>
      <div className="products-header__select-buttons">
        <select aria-label="select type of car" onChange={props.filterSelect}className="products-header__type-select">
          <option value="None">Select Type</option>
          <option value="Exotic">Exotic</option>
          <option value="Sport">Sport</option>
          <option value="Luxury">Luxury</option>
        </select>
        <select aria-label="select price of car" onChange={props.filterSelect}className="products-header__price-select">
          <option value="None">Price By Day</option>
          <option value="0-700">$0-700</option>
          <option value="800-1500">$800-1500</option>
          <option value="1600">$1600+</option>
          
        </select>
        <button onClick={props.showVehicles}className="products-header__show-all-button">
          Show All Vehicles
        </button>
      </div>
      <form method="GET" action="" onSubmit={props.search}>
        <input aria-label="search inventory" type="text" className="search-bar" placeholder="Search"/>
        <button aria-label="click to search"type="submit" className="search-bar-submit"></button>
      </form>
    </div>
  );
};

export default selectTags;
