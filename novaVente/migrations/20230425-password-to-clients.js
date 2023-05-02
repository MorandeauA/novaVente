'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('clients', 'password', {
      type: Sequelize.STRING,
      allowNull: false
    });
  },
};

// commande pour jouer la migration :
// npx sequelize-cli db:migrate --config ./api/config.js 