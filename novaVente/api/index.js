const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Sequelize } = require('sequelize');
const config = require('./config');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const sequelize = new Sequelize(config.development.database, config.development.username, config.development.password, {
  host: config.development.host,
  dialect: config.development.dialect
});

const Client = sequelize.import('./models/clients.js');
const Film = sequelize.import('./models/films.js');
const Avis = sequelize.import('./models/avis.js');

sequelize.sync();

// Routes pour les clients
const clientRoutes = require('./routes/clientsRoutes');
app.use('/api/clients', clientRoutes);

// Routes pour les films
const filmRoutes = require('./routes/filmsRoutes');
app.use('/api/films', filmRoutes);

// Routes pour les avis
const avisRoutes = require('./routes/avisRoutes');
app.use('/api/avis', avisRoutes);

// Lancement de l'application
app.listen(3000, () => {
  console.log('Serveur lancé sur le port 3000');
});
