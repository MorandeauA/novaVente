const express = require('express');
const router = express.Router();
const { Client } = require('../models'); // Importation du modèle "Client"

// CREATE
router.post('/clients', async (req, res) => {
  try {
    const client = await Client.create(req.body); // Création d'un nouveau client dans la base de données
    res.status(201).json(client); // Envoi d'une réponse avec le client créé en JSON
  } catch (err) {
    res.status(400).json({ message: err.message }); // Envoi d'une réponse avec un message d'erreur en JSON
  }
});

// READ
router.get('/clients/:id', async (req, res) => {
  try {
    const client = await Client.findByPk(req.params.id); // Récupération du client correspondant à l'id passé en paramètre
    if (client === null) { // Vérification si le client existe
      res.status(404).json({ message: 'Client not found' }); // Envoi d'une réponse avec un message d'erreur en JSON
    } else {
      res.status(200).json(client); // Envoi d'une réponse avec le client en JSON
    }
  } catch (err) {
    res.status(400).json({ message: err.message }); // Envoi d'une réponse avec un message d'erreur en JSON
  }
});

// UPDATE
router.patch('/clients/:id', async (req, res) => {
  try {
    const client = await Client.findByPk(req.params.id); // Récupération du client correspondant à l'id passé en paramètre
    if (client === null) { // Vérification si le client existe
      res.status(404).json({ message: 'Client not found' }); // Envoi d'une réponse avec un message d'erreur en JSON
    } else {
      const updatedClient = await client.update(req.body); // Mise à jour du client avec les données envoyées dans le corps de la requête
      res.status(200).json(updatedClient); // Envoi d'une réponse avec le client mis à jour en JSON
    }
  } catch (err) {
    res.status(400).json({ message: err.message }); // Envoi d'une réponse avec un message d'erreur en JSON
  }
});

// DELETE
router.delete('/clients/:id', async (req, res) => {
  try {
    const client = await Client.findByPk(req.params.id); // Récupération du client correspondant à l'id passé en paramètre
    if (client === null) { // Vérification si le client existe
      res.status(404).json({ message: 'Client not found' }); // Envoi d'une réponse avec un message d'erreur en JSON
    } else {
      await client.destroy(); // Suppression du client de la base de données
      res.status(204).send(); // Envoi d'une réponse avec un code 204 (pas de contenu)
    }
  } catch (err) {
    res.status(400).json({ message: err.message }); // Envoi d'une réponse avec un message d'erreur en JSON
  }
});

module.exports = router;
