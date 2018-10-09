import React from "react";
import { Link } from "react-router-dom";
import auth0Client from "../Auth/Auth";

const mobileNav = props => {
  return (
    <nav className="mobileNav" style={{ right: "-100vw" }}>
      <ul className="mobileNav__unord-list">
        <li className="mobileNav__list-item">
          <Link onClick={props.closeMobileNav} to="/">
            Home
          </Link>
        </li>
        <li className="mobileNav__list-item">
          <Link onClick={props.closeMobileNav} to="/inventory">
            Inventory
          </Link>
        </li>
        <li className="mobileNav__list-item">
          <Link onClick={props.closeMobileNav} to="/contact">
            Contact
          </Link>
        </li>
        {auth0Client.isAuthenticated() ? (
          <li className="mobileNav__list-item">
            <Link to="/admin">Admin</Link>
          </li>
        ) : null}
      </ul>
      {/* If user is authenticated then sign IN button appears*/}

      {!auth0Client.isAuthenticated() && (
        <div>
          <button className="mobileNav__auth" onClick={auth0Client.signIn}>
            Log In
          </button>
        </div>
      )}
      {/* If user is authenticated then sign out button appears*/}

      {auth0Client.isAuthenticated() && (
        <div>
          <button
            className="mobileNav__auth mobileNav__auth--logout"
            onClick={auth0Client.signOut}
          >
            Log Out
          </button>
        </div>
      )}
    </nav>
  );
};

export default mobileNav;
