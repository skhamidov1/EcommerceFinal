import React from 'react';
import { Link } from 'react-router-dom';

const header = () => {

    return (
        <header>
            <nav className="nav">
                <ul className="nav__unord-list">
                    <li className="nav__list-item nav__list-item--padding"><Link to="/">RoyalRentals</Link></li>
                    <li className="nav__list-item nav__list-item--margin"><img src="../../../static/img/crown.svg" alt="Crown" /></li>
                    <li className="nav__list-item"><Link to="/">Home</Link></li>
                    <li className="nav__list-item"><Link to="/products">Inventory</Link></li>
                    <li className="nav__list-item"><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default header;