import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import API_BASE_URL from './apiConfig'; // Import de l'URL de base depuis le fichier de configuration

function ArticlePage() {
    const { articleId } = useParams();
    const [article, setArticle] = useState(null);

    useEffect(() => {
        // Effectuez une requête pour récupérer l'article en utilisant l'ID (articleId)
        axios.get(API_BASE_URL + `/api/read-article/${articleId}`)
            .then((response) => {
                setArticle(response.data);
                console.log('Données de l\'article récupérées :', response.data); // Ajoutez cette ligne pour afficher les données dans la console
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération de l\'article :', error);
            });
    }, [articleId]);

    return (
        <div>
            {/* {article ? (
                <div> */}
                    <h1>{article.title}</h1>
                    <p>{article.undertitle}</p>
                    <p>{article.description}</p>
                    {/* Autres informations sur l'article */}
                {/* </div>
            ) : (
                <p>Chargement de l'article...</p>
            )} */}
        </div>
    );
}

export default ArticlePage;