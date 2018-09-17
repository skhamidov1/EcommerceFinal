import React from 'react';
import { Link } from 'react-router-dom';

const footer = () => {
    return (
        <footer className="footer">
            <nav className="footer__nav">
                <ul className="footer__unord-list">
                    <li className="footer__list-item"><Link to="/">Home</Link></li>
                    <li className="footer__list-item"><Link to="/inventory">Products</Link></li>
                    <li className="footer__list-item"><Link to="/contact">Contact</Link></li>
                    <li className="footer__list-item"><a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/">Facebook</a></li>
                    <li className="footer__list-item"><a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/">Instagram</a></li>
                    <li className="footer__list-item"><a rel="noopener noreferrer" target="_blank" href="https://www.twitter.com/">Twitter</a></li>
                </ul>
            </nav>
        </footer>
    )
}

export default footer;