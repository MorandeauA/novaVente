const db = require('../database/db');

const Facture = function(facture) {
  this.id_client = facture.id_client;
  this.date = facture.date;
  this.montant_total = facture.montant_total;
};

Facture.create = (newFacture, result) => {
  db.query('INSERT INTO facture SET ?', newFacture, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }

    console.log('created facture: ', { id: res.insertId, ...newFacture });
    result(null, { id: res.insertId, ...newFacture });
  });
};

Facture.getAll = (result) => {
  db.query('SELECT * FROM facture', (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(null, err);
      return;
    }

    console.log('facture: ', res);
    result(null, res);
  });
};

Facture.findById = (factureId, result) => {
  db.query('SELECT * FROM facture WHERE id_facture = ?', factureId, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log('found facture: ', res[0]);
      result(null, res[0]);
      return;
    }

    result({ kind: 'not_found' }, null);
  });
};

Facture.updateById = (id, facture, result) => {
  db.query(
    'UPDATE facture SET id_client = ?, date = ?, montant_total = ? WHERE id_facture = ?',
    [facture.id_client, facture.date, facture.montant_total, id],
    (err, res) => {
      if (err) {
        console.log('error: ', err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found facture with the id
        result({ kind: 'not_found' }, null);
        return;
      }

      console.log('updated facture: ', { id: id, ...facture });
      result(null, { id: id, ...facture });
    }
  );
};

Facture.remove = (id, result) => {
  db.query('DELETE FROM facture WHERE id_facture = ?', id, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found facture with the id
      result({ kind: 'not_found' }, null);
      return;
    }

    console.log('deleted facture with id: ', id);
    result(null, res);
  });
};

module.exports = Facture;
