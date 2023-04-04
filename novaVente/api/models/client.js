const Sequelize = require('sequelize');
const db = require('../config/database');

const Client = db.define('client', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nom: {
    type: Sequelize.STRING,
    allowNull: false
  },
  prenom: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  dateCreation: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW
  }
});

module.exports = Client;
