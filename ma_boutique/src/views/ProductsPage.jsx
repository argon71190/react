import axios from 'axios';
import React, { useState, useEffect } from 'react';
//import { Link } from 'react-router-dom';
import { Link, useHistory } from 'react-router-dom';
//import './ProductsPage.css';
import API_BASE_URL from './apiConfig'; // Importez l'URL de base depuis le fichier de configuration

const ProductsPage = () => {
    const [articles, setArticles] = useState([]); // État pour stocker les messages

    useEffect(() => {
        // Récupération de tous les messages
        axios.get(API_BASE_URL + '/api/selectAllProducts')
            .then((articles) => {
                setArticles(articles.data.messages); // Stockez les messages dans l'état
            })
            .catch((error) => {
                console.error('Erreur lors de la demande des données:', error);
            });
    }, []); // Utilisez un effet pour effectuer la demande au montage du composant

    return (
        <div className="contact-container">
            <h1 className="title">Liste des articles</h1>
            {articles.length === 0 ? (
                <p>Aucun article trouvé</p>
            ) : (
                <ul>
                    {articles.map((article) => (
                        <li key={article.id}>
                            <h2>Titre : {article.title}</h2>
                            <h3>Sous-Titre : {article.undertitle}</h3>
                            <p>Prix : {article.price} €</p>
                            <img src={`../images/${article.img}`} alt={`${article.img}`} />
                            <p>Description : {article.description}</p>
                            <Link to={URL + `/api/read-article/${article.id}`}>Voir l'article</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ProductsPage;