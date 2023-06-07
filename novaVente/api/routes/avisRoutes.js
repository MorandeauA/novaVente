const express = require('express');
const router = express.Router();
const avisController = require('../controllers/avis');
const authMiddleware = require('../middleware/auth');

// Route pour récupérer tous les avis
router.get('/', avisController.getAllAvis);

// Route pour récupérer un avis par son id
router.get('/:id', avisController.getAvisById);

// Route pour créer un nouvel avis
router.post('/', avisController.addAvis);

// Route pour mettre à jour un avis existant
router.put('/:id', avisController.updateAvis);

// Route pour supprimer un avis
router.delete('/:id', avisController.deleteAvis);

// Route pour récupérer les films notés par un client
router.get('/films-notes/:id', avisController.getUserRatedMovies);

module.exports = router;
