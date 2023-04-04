const express = require('express');
const router = express.Router();
const produitController = require('../controllers/produitController');

// Récupérer tous les produits
router.get('/', produitController.getAllProduits);

// Récupérer un produit par son ID
router.get('/:id', produitController.getProduitById);

// Ajouter un nouveau produit
router.post('/', produitController.addProduit);

// Modifier un produit existant
router.put('/:id', produitController.updateProduit);

// Supprimer un produit existant
router.delete('/:id', produitController.deleteProduit);

module.exports = router;
