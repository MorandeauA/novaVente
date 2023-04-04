const Facture = require('../models/facture');

exports.createFacture = (req, res) => {
  const facture = new Facture(req.body);
  facture.save((err, facture) => {
    if (err) {
      return res.status(400).json({
        error: "Unable to save facture in DB"
      });
    }
    res.json({ facture });
  });
};

exports.getFactures = (req, res) => {
  Facture.find().exec((err, factures) => {
    if (err) {
      return res.status(400).json({
        error: "No factures found"
      });
    }
    res.json(factures);
  });
};

exports.getFactureById = (req, res, next, id) => {
  Facture.findById(id).exec((err, facture) => {
    if (err) {
      return res.status(400).json({
        error: "Facture not found"
      });
    }
    req.facture = facture;
    next();
  });
};

exports.getSingleFacture = (req, res) => {
  return res.json(req.facture);
};

exports.updateFacture = (req, res) => {
  Facture.findByIdAndUpdate(
    { _id: req.facture._id },
    { $set: req.body },
    { new: true, useFindAndModify: false },
    (err, facture) => {
      if (err) {
        return res.status(400).json({
          error: "Unable to update facture"
        });
      }
      res.json(facture);
    }
  );
};

exports.deleteFacture = (req, res) => {
  const facture = req.facture;
  facture.remove((err, facture) => {
    if (err) {
      return res.status(400).json({
        error: "Unable to delete facture"
      });
    }
    res.json({
      message: "Facture deleted successfully"
    });
  });
};
