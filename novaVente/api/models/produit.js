const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Client = require('./client');

const Produit = sequelize.define('Produit', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  photo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  prix: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
});

Produit.belongsToMany(Client, { through: 'Facture' });

module.exports = Produit;
