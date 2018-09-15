import React from 'react';
import { Link } from 'react-router-dom';

const footer = () => {
    return (
        <footer className="footer">
            <nav className="footer__nav">
                <ul className="footer__unord-list">
                    <li className="footer__list-item"><Link to="/home">Home</Link></li>
                    <li className="footer__list-item"><Link to="/products">Products</Link></li>
                    <li className="footer__list-item"><Link to="/contact">Contact</Link></li>
                    <li className="footer__list-item"><Link to="/facebook">Facebook</Link></li>
                    <li className="footer__list-item"><Link to="/instagram">Instagram</Link></li>
                    <li className="footer__list-item"><Link to="/linkedin">Linkedin</Link></li>
                </ul>
            </nav>
        </footer>
    )
}

export default footer;