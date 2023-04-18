const Clients = require('../models/clients');

// Create and save a new client
exports.create = (req, res) => {
  // Validate request
  if (!req.body.nom || !req.body.prenom || !req.body.email) {
    res.status(400).send({
      message: "Nom, prénom et email sont obligatoires !"
    });
    return;
  }

  // Create a client
  const client = {
    nom: req.body.nom,
    prenom: req.body.prenom,
    email: req.body.email
  };

  // Save client in the database
  Clients.create(client)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Une erreur s'est produite lors de la création du client."
      });
    });
};

// Retrieve all clients from the database and export the function findAll
exports.findAll = async (req, res) => {
  try {
    const clients = await Clients.findAll();
    res.send(clients);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Une erreur s'est produite lors de la récupération des clients."
    });
  }
};


// Find a single client with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Clients.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: "Client avec l'ID " + id + " introuvable !"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Erreur lors de la récupération du client avec l'ID " + id
      });
    });
};

// Update a client by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Clients.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Le client a été mis à jour avec succès."
        });
      } else {
        res.status(404).send({
          message: "Impossible de mettre à jour le client avec l'ID " + id + "."
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Erreur lors de la mise à jour du client avec l'ID " + id
      });
    });
};

// Delete a client with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Clients.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Le client a été supprimé avec succès."
        });
      } else {
        res.status(404).send({
          message: "Impossible de supprimer le client avec l'ID " + id + "."
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Erreur lors de la suppression du client avec l'ID " + id
      });
    });
};
