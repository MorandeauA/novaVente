const express = require('express');
const router = express.Router();

const filmsController = require('../controllers/films');

// GET - Récupérer tous les films
router.get('/', filmsController.getAllFilms);

// GET - Récupérer un film par son ID
router.get('/:id', filmsController.getFilmById);

// POST - Ajouter un film
router.post('/', filmsController.addFilm);

// PUT - Modifier un film par son ID
router.put('/:id', filmsController.updateFilm);

// DELETE - Supprimer un film par son ID
router.delete('/:id', filmsController.deleteFilm);

module.exports = router;
