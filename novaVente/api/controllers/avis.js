const Avis = require('../models/avis');

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
        return res.status(404).send('Avis non trouvé');
      }
      res.json(avis);
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
        return res.status(404).send('Avis non trouvé');
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
        return res.status(404).send('Avis non trouvé');
      }
      await avis.destroy();
      res.send('Avis supprimé');
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Erreur Serveur');
    }
  }
};

module.exports = avisController;
