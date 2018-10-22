import React from "react";
import { NavLink, Link } from "react-router-dom";
import auth0Client from "../Auth/Auth";

const header = props => {
  return (
    <header>
      <nav className="nav">
        <ul className="nav__unord-list">
          <li className="nav__list-item nav__list-item--padding">
            <img src="../../../static/img/crown.svg" alt="Crown" />
          </li>
          <li className="nav__list-item nav__list-item--margin">
            <Link to="/">
              RoyalRentals
            </Link>
          </li>
          <li className="nav__list-item">
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="nav__list-item">
            <NavLink to="/inventory" activeClassName="active">
              Inventory
            </NavLink>
          </li>
          <li className="nav__list-item">
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
          {auth0Client.isAuthenticated() ? (
            <li className="nav__list-item">
              <NavLink to="/admin" activeClassName="active">
                Admin
              </NavLink>
            </li>
          ) : null}
        </ul>

        <img
          onClick={props.toggleMobileNav}
          src="../../../static/img/hamburger.svg"
          className="nav__hamburger"
          alt="Navigation"
          right={"-100vw"}
        />

        {/* If user is not authenticated then sign in button appears*/}

        {!auth0Client.isAuthenticated() && (
          <div>
            <button className="nav__auth" onClick={auth0Client.signIn}>
              Log In
            </button>
          </div>
        )}
        {/* If user is authenticated then sign out button appears*/}

        {auth0Client.isAuthenticated() && (
          <div>
            <button className="nav__auth nav__auth--logout" onClick={auth0Client.signOut}>
              Log Out
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default header;
