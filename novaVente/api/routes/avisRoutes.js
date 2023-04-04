const express = require('express');
const router = express.Router();
const avisController = require('../controllers/avis');

// Route pour récupérer tous les avis
router.get('/', avisController.getAllAvis);

// Route pour récupérer un avis par son id
router.get('/:id', avisController.getAvisById);

// Route pour créer un nouvel avis
router.post('/', avisController.createAvis);

// Route pour mettre à jour un avis existant
router.put('/:id', avisController.updateAvis);

// Route pour supprimer un avis
router.delete('/:id', avisController.deleteAvis);

module.exports = router;
