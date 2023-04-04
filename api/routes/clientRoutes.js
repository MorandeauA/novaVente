const express = require('express');
const router = express.Router();
const clientController = require('../controllers/client');

// GET all clients
router.get('/', clientController.getAllClients);

// GET a client by id
router.get('/:id', clientController.getClientById);

// POST a new client
router.post('/', clientController.createClient);

// PUT/update a client by id
router.put('/:id', clientController.updateClientById);

// DELETE a client by id
router.delete('/:id', clientController.deleteClientById);

module.exports = router;
