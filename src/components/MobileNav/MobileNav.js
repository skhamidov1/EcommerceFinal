import React from "react";
import { Link } from "react-router-dom";

const mobileNav = (props) => {
  return (
    <nav className="mobileNav" style={{right: "-100vw"}}>
      <ul className="mobileNav__unord-list">
        <li className="mobileNav__list-item">
          <Link onClick={props.closeMobileNav}to="/">Home</Link>
        </li>
        <li className="mobileNav__list-item">
          <Link onClick={props.closeMobileNav}to="/products">Inventory</Link>
        </li>
        <li className="mobileNav__list-item">
          <Link onClick={props.closeMobileNav}to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default mobileNav;
