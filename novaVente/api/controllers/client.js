const Client = require('../models/client');

exports.getAllClients = (req, res) => {
  Client.findAll()
    .then((clients) => {
      res.status(200).json(clients);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

exports.createClient = (req, res) => {
  const { nom, prenom, adresse } = req.body;
  Client.create({
    nom: nom,
    prenom: prenom,
    adresse: adresse,
  })
    .then((client) => {
      res.status(201).json(client);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

exports.getClientById = (req, res) => {
  const id = req.params.id;
  Client.findByPk(id)
    .then((client) => {
      if (client === null) {
        res.status(404).json({ error: `Client with id ${id} not found` });
      } else {
        res.status(200).json(client);
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

exports.updateClient = (req, res) => {
  const id = req.params.id;
  const { nom, prenom, adresse } = req.body;
  Client.update(
    {
      nom: nom,
      prenom: prenom,
      adresse: adresse,
    },
    { where: { id: id } }
  )
    .then(() => {
      res.status(200).json({ message: `Client with id ${id} updated successfully` });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

exports.deleteClient = (req, res) => {
  const id = req.params.id;
  Client.destroy({ where: { id: id } })
    .then(() => {
      res.status(200).json({ message: `Client with id ${id} deleted successfully` });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};
