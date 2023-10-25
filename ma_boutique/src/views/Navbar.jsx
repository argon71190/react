import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/contact">Nous contacter</Link></li>
                <li><Link to="/products">Nos produits</Link></li>
                <li><Link to="/register">S'inscrire</Link></li>
                <li><Link to="/login">Se connecter</Link></li>
                <li><Link to="/messages">Liste des messages</Link></li>

            </ul>
        </nav>
    );
};

export default Navbar;