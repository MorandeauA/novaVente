const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Film = sequelize.define('Film', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nom: {
    type: DataTypes.STRING,
    allowNull: false
  },
  date_sortie: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  realisateur: {
    type: DataTypes.STRING,
    allowNull: false
  },
  duree: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  photo: {
    type: DataTypes.STRING(1024),
    allowNull: true
  }
}, {
  tableName: 'films',
  timestamps: false
});

module.exports = Film;
