const express = require('express');
const router = express.Router();
const factureController = require('../controllers/facture');

// Route pour récupérer toutes les factures
router.get('/', factureController.getFactures);

// Route pour récupérer une facture par son ID
router.get('/:id', factureController.getFactureById);

// Route pour créer une facture
router.post('/', factureController.createFacture);

// Route pour mettre à jour une facture
router.put('/:id', factureController.updateFacture);

// Route pour supprimer une facture
router.delete('/:id', factureController.deleteFacture);

module.exports = router;
