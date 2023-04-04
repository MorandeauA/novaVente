const express = require('express');
const router = express.Router();
const clientsController = require('../controllers/clients');

// GET all clients
router.get('/', clientsController.getAllClients);

// GET a specific client by id
router.get('/:id', clientsController.getClientById);

// CREATE a new client
router.post('/', clientsController.createNewClient);

// UPDATE a client by id
router.put('/:id', clientsController.updateClientById);

// DELETE a client by id
router.delete('/:id', clientsController.deleteClientById);

module.exports = router;
