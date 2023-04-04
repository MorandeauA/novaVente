const Produit = require('../models/produit');

// Récupérer tous les produits
exports.getProduits = (req, res, next) => {
  Produit.findAll()
    .then(produits => {
      res.status(200).json(produits);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        error: 'Erreur serveur'
      });
    });
};

// Récupérer un produit par son ID
exports.getProduitById = (req, res, next) => {
  const id = req.params.id;
  Produit.findByPk(id)
    .then(produit => {
      if (!produit) {
        return res.status(404).json({
          error: 'Produit non trouvé'
        });
      }
      res.status(200).json(produit);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        error: 'Erreur serveur'
      });
    });
};

// Ajouter un produit
exports.createProduit = (req, res, next) => {
  const nom = req.body.nom;
  const stock = req.body.stock;
  const photo = req.body.photo;
  const prix = req.body.prix;

  Produit.create({
    nom: nom,
    stock: stock,
    photo: photo,
    prix: prix
  })
    .then(produit => {
      res.status(201).json({
        message: 'Produit créé',
        produit: produit
      });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        error: 'Erreur serveur'
      });
    });
};

// Modifier un produit
exports.updateProduit = (req, res, next) => {
  const id = req.params.id;
  const nom = req.body.nom;
  const stock = req.body.stock;
  const photo = req.body.photo;
  const prix = req.body.prix;

  Produit.findByPk(id)
    .then(produit => {
      if (!produit) {
        return res.status(404).json({
          error: 'Produit non trouvé'
        });
      }
      produit.nom = nom;
      produit.stock = stock;
      produit.photo = photo;
      produit.prix = prix;
      return produit.save();
    })
    .then(result => {
      res.status(200).json({
        message: 'Produit modifié',
        produit: result
      });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        error: 'Erreur serveur'
      });
    });
};

// Supprimer un produit
exports.deleteProduit = (req, res, next) => {
  const id = req.params.id;
  Produit.findByPk(id)
    .then(produit => {
      if (!produit) {
        return res.status(404).json({
          error: 'Produit non trouvé'
        });
      }
      return produit.destroy();
    })
    .then(result => {
      res.status(200).json({
        message: 'Produit supprimé'
      });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        error: 'Erreur serveur'
      });
    });
};
