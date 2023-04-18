const express = require('express');
const router = express.Router();
const clientsController = require('../controllers/clients');

// GET all clients
router.get('/', clientsController.findAll);

// GET a specific client by id
router.get('/:id', clientsController.findOne);

// CREATE a new client
router.post('/', clientsController.create);

// UPDATE a client by id
router.put('/:id', clientsController.update);

// DELETE a client by id
router.delete('/:id', clientsController.delete);

module.exports = router;
