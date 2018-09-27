import React from 'react';
import { Link } from 'react-router-dom';

const header = (props) => {

    return (
        <header>
            <nav className="nav">
                <ul className="nav__unord-list">
                    <li className="nav__list-item nav__list-item--padding"><Link to="/">RoyalRentals</Link></li>
                    <li className="nav__list-item nav__list-item--margin"><img src="../../../static/img/crown.svg" alt="Crown" /></li>
                    <li className="nav__list-item"><Link to="/">Home</Link></li>
                    <li className="nav__list-item"><Link to="/inventory">Inventory</Link></li>
                    <li className="nav__list-item"><Link to="/contact">Contact</Link></li>
                    <li className="nav__list-item"><Link to="/admin">Admin</Link></li>
                </ul>
                <img onClick={props.closeMobileNav}
                src="../../../static/img/hamburger.svg" 
                className="nav__hamburger" alt="Navigation"
                right={"-100vw"}/>
            </nav>
        </header>
    )
}

export default header;