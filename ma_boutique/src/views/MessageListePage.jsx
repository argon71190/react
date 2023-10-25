import axios from 'axios';
import React, { useState, useEffect } from 'react';
import API_BASE_URL from './apiConfig'; // Importez l'URL de base depuis le fichier de configuration

const MessageListePage = () => {
    const [messages, setMessages] = useState([]); // État pour stocker les messages

    useEffect(() => {
        // Récupération de tous les messages
        axios.get(API_BASE_URL + '/api/selectMessages')
            .then((response) => {
                setMessages(response.data.messages); // Stockez les messages dans l'état
            })
            .catch((error) => {
                console.error('Erreur lors de la demande des données:', error);
            });
    }, []); // Utilisez un effet pour effectuer la demande au montage du composant

    return (
        <div className="contact-container">
            <h1 className="title">Liste des messages</h1>
            <ul>
                {messages.map((message) => (
                    <li key={message.id}>
                        <p>Nom : {message.firstName} {message.lastName}</p>
                        <p>Email : {message.email}</p>
                        <p>Motif : {message.motif}</p>
                        <p>Description : {message.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MessageListePage;