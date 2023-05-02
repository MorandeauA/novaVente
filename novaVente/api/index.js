const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./sequelize');
const path = require('path');

const app = express();

const axios = require('axios');

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 1000, // nombre maximum de millisecondes pour attendre une réponse
});

app.use(cors());
app.use(bodyParser.json());

const Avis = require('../api/models/avis');
const Client = require('../api/models/clients');
const Film = require('../api/models/films');

sequelize.sync();

// Routes pour les clients
const clientRoutes = require('../api/routes/clientsRoutes');
app.use('/api/clients', clientRoutes);

// Routes pour les films
const filmRoutes = require('../api/routes/filmsRoutes');
app.use('/api/films', filmRoutes);

// Routes pour les avis
const avisRoutes = require('../api/routes/avisRoutes');
app.use('/api/avis', avisRoutes);

// Lancement de l'application
app.listen(3000, () => {
  console.log('Serveur lancé sur le port 3000');
});
