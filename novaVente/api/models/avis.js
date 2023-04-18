const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Avis = sequelize.define('Avis', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_client: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'clients',
      key: 'id'
    }
  },
  id_film: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'films',
      key: 'id'
    }
  },
  note: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  commentaire: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  date_creation: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'avis',
  timestamps: false
});

module.exports = Avis;
