const cors = require('cors');
const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 4000;

// Configurer la connexion à la base de données MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '110499',
    database: 'ma_boutique'
});

app.use(cors());

console.log("ok, c'est bon !")
// Gérer les requêtes POST pour insérer des données dans la base de données
app.use(express.json());

app.use((err, req, res, next) => {
    if (err instanceof SyntaxError) {
        res.status(400).json({ error: 'Erreur de syntaxe JSON' });
    } else {
        next();
    }
});

app.post('/api/soumissions', (req, res) => {
    const { firstName, lastName, email, motif, description } = req.body;

    console.log(req.body.firstName);
    // Insérer les données dans la base de données MySQL
    const query = `INSERT INTO contact (firstName, lastName, email, motif, description) VALUES (?, ?, ?, ?, ?)`;
    const values = [firstName, lastName, email, motif, description];

    db.query(query, values, (err, result) => {
        if (err) {
            console.error('Erreur lors de l\'insertion des données :', err);
            res.status(500).json({ error: 'Erreur lors de l\'insertion des données' });
        } else {
            res.json({ message: 'Données insérées avec succès' });
        }
    });
});


app.get('/api/selectMessages', (req, res) => {
    // Effectuez une requête SQL pour sélectionner tous les messages de la table "contact"
    const query = 'SELECT * FROM contact';

    db.query(query, (err, results) => {
        if (err) {
            console.error('Erreur lors de la sélection des messages :', err);
            res.status(500).json({ error: 'Erreur lors de la sélection des messages' });
        } else {
            res.json({ messages: results });
        }
    });
});

app.get('/api/selectAllProducts', (req, res) => {
    // Effectuez une requête SQL pour sélectionner tous les messages de la table "contact"
    const query = 'SELECT * FROM articles';

    db.query(query, (err, results) => {
        if (err) {
            console.error('Erreur lors de la sélection des messages :', err);
            res.status(500).json({ error: 'Erreur lors de la sélection des messages' });
        } else {
            res.json({ messages: results });
        }
    });
});


app.get('/api/read-article/:id', (req, res) => {

    const articleId = req.params.id;
    // Effectuez une requête SQL pour sélectionner l'article
    const query = 'SELECT * FROM articles WHERE id = ?';

    db.query(query, [articleId], (err, results) => {
        if (err) {
            console.error('Erreur lors de la récupération de l\'article :', err);
            res.status(500).json({ error: 'Erreur lors de la récupération de l\'article' });
        } else {
            if (results.length === 0) {
                // Aucun article trouvé avec cet ID
                res.status(404).json({ error: 'Aucun article trouvé avec cet ID' });
            } else {
                // Article trouvé, renvoyez-le en tant que réponse JSON
                const article = results[0]; // Nous prenons le premier résultat
                res.json(article);
            }
        }
    });
});



// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur écoutant sur le port ${port}`);
});