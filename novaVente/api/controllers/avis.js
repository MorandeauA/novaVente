const Avis = require('../models/avis');
const Film = require('../models/films');

const avisController = {
  getAllAvis: async (req, res) => {
    try {
      const avis = await Avis.findAll();
      res.json(avis);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Erreur Serveur');
    }
  },

  getAvisById: async (req, res) => {
    try {
      const avis = await Avis.findOne({
        where: { id: req.params.id }
      });
      if (!avis) {
        return res.status(404).send('Avis non trouvé 1');
      }
      res.send(avis);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Erreur Serveur');
    }
  },

  addAvis: async (req, res) => {
    const { id_client, id_film, note, commentaire } = req.body;
    try {
      const newAvis = await Avis.create({
        id_client,
        id_film,
        note,
        commentaire
      });
      res.json(newAvis);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Erreur Serveur');
    }
  },

  updateAvis: async (req, res) => {
    const { id_client, id_film, note, commentaire } = req.body;
    try {
      let avis = await Avis.findOne({
        where: { id: req.params.id }
      });
      if (!avis) {
        return res.status(404).send('Avis non trouvé 2');
      }
      avis = await avis.update({
        id_client,
        id_film,
        note,
        commentaire
      });
      res.json(avis);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Erreur Serveur');
    }
  },

  deleteAvis: async (req, res) => {
    try {
      let avis = await Avis.findOne({
        where: { id: req.params.id }
      });
      if (!avis) {
        return res.status(404).send('Avis non trouvé 3');
      }
      await avis.destroy();
      res.send('Avis supprimé');
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Erreur Serveur');
    }
  },

  getUserRatedMovies: async (req, res) => {
    try {
      const userId = req.params.id;

      // Récupérer les avis de l'utilisateur avec l'ID spécifié
      const avis = await Avis.findAll({
        where: { id_client: userId }
      });

      // Récupérer les IDs des films notés par l'utilisateur
      const filmIds = avis.map(a => a.id_film);

      // Récupérer les informations des films correspondants
      const films = await Film.findAll({
        where: { id: filmIds }
      });

      res.json(films);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Erreur Serveur');
    }
  }
};

module.exports = avisController;
