const Film = require('../models/films');

// Récupérer tous les films
exports.getAllFilms = async (req, res) => {
  try {
    const films = await Film.findAll();
    res.json(films);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

// Récupérer un film par son ID
exports.getFilmById = async (req, res) => {
  try {
    const film = await Film.findByPk(req.params.id);
    if (!film) {
      return res.status(404).send('Film not found');
    }
    res.json(film);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

// Ajouter un nouveau film
exports.addFilm = async (req, res) => {
  try {
    const { nom, date_sortie, description, photo } = req.body;
    const newFilm = await Film.create({
      nom,
      date_sortie,
      description,
      photo
    });
    res.json(newFilm);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

// Mettre à jour un film existant
exports.updateFilm = async (req, res) => {
  try {
    const { nom, date_sortie, description, photo } = req.body;
    const film = await Film.findByPk(req.params.id);
    if (!film) {
      return res.status(404).send('Film not found');
    }
    film.nom = nom;
    film.date_sortie = date_sortie;
    film.description = description;
    film.photo = photo;
    await film.save();
    res.json(film);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

// Supprimer un film
exports.deleteFilm = async (req, res) => {
  try {
    const film = await Film.findByPk(req.params.id);
    if (!film) {
      return res.status(404).send('Film not found');
    }
    await film.destroy();
    res.send('Film deleted');
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};
