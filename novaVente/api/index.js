const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./sequelize');
const path = require('path');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const Avis = require('../api/models/avis');
const Client = require('../api/models/clients');
const Film = require('../api/models/films');

sequelize.sync();

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.get('/dashboard', (req, res) => {
  res.render('dashboard');
});

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
