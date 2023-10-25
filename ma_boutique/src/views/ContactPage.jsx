import React, { useState } from 'react';
import ErrorBox from './ErrorBox';
import axios from 'axios';
import API_BASE_URL from './apiConfig'; // Importez l'URL de base depuis le fichier de configuration
//import './ContactPage.css';


const ContactPage = () => {
    const [errors, setErrors] = useState([]);

    const [formData, setFormData] = useState({
        firstName: 'Micke',
        lastName: 'ROGER',
        email: 'argon71@hotmail.fr',
        motif: 'Autre',
        description: 'sdgfdskjfghsdlkfghqjgfhqlkjghqsekjhgesq',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // const formData = new FormData(e.target);
        const newErrors = [];
        const { firstName, lastName, email, motif, description } = formData;

        // Vérification du prénom
        const firstNameRegex = /^[A-Za-z]{3,50}$/;
        const sanitizedFirstName = firstName.toUpperCase();
        // ou const sanitizedFirstName = formData.firstName.toUpperCase();
        if (!firstNameRegex.test(sanitizedFirstName)) {
            newErrors.push("Le prénom doit contenir entre 3 et 50 caractères (lettres majuscules ou minuscules).");
        }

        // Vérification du nom de famille
        const lastNameRegex = /^[A-Za-z]{3,50}$/;
        const sanitizedLastName = lastName.charAt(0).toUpperCase() + formData.lastName.slice(1).toLowerCase();
        if (!lastNameRegex.test(sanitizedLastName)) {
            newErrors.push("Le nom de famille doit contenir entre 3 et 50 caractères (première lettre en majuscules, autres en minuscules).");
        }

        // Vérification de l'adresse email
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        if (!emailRegex.test(email)) {
            newErrors.push("L'adresse email n'est pas au bon format.");
        }

        // Vérification du motif
        if (!motif) {
            newErrors.push("Veuillez choisir un motif.");
        }

        // Vérification de la description
        if (description.length < 20 || description.length > 250) {
            newErrors.push("La description doit contenir entre 20 et 250 caractères.");
        }

        // Mettre à jour le tableau d'erreurs
        setErrors(newErrors);

        // Si le tableau d'erreurs n'est pas vide, ne pas poursuivre le traitement
        if (newErrors.length > 0) {
            return;
        }

        // Si toutes les vérifications sont réussies, vous pouvez envoyer les données du formulaire.
        console.log("Données du formulaire prêtes à être envoyées : ", formData);

        // Si toutes les vérifications sont réussies, vous pouvez envoyer les données du formulaire à un serveur.
        axios.post(API_BASE_URL + '/api/soumissions', formData)
        .then((response) => {
            console.log('Données envoyées avec succès:', response.data);
            // Réinitialiser le formulaire ou effectuer d'autres actions nécessaires après l'envoi.
        })
        .catch((error) => {
            console.error('Erreur lors de l\'envoi des données:', error);
            // Gérer les erreurs de l'envoi, si nécessaire.
        });

    };

    return (
        <div className="contact-container">
            <h1 className="title">Nous contacter</h1>

            <ErrorBox errors={errors} /> {/* Affiche les erreurs s'il y en a. */}

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label  htmlFor = "firstName">Prénom:</label>
                    <input  type    = "text"
                            id      = "firstName"
                            name    = "firstName"
                            value   = {formData.firstName}
                            onChange= {handleChange}
                    />
                </div>
                <div className="form-group">
                    <label  htmlFor = "lastName">Nom:</label>
                    <input  type    = "text"
                            id      = "lastName"
                            name    = "lastName"
                            value   = {formData.lastName}
                            onChange= {handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Adresse email:</label>
                    <input  type    = "email"
                            id      = "email"
                            name    = "email"
                            value   = {formData.email}
                            onChange= {handleChange}
                    />
                </div>
                <div className="form-group">
                    <label  htmlFor = "motif">Motif:</label>
                    <select id      = "motif"
                            name    = "motif"
                            value   = {formData.motif}
                            onChange= {handleChange}
                    >

                        <option value="">Sélectionnez un motif</option>
                        <option value="pbConnexion">Problème de connexion au site</option>
                        <option value="beug">beug rencontré</option>
                        <option value="Autre">Autre</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
};

export default ContactPage;