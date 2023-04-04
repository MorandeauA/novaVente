-- Création de la table "clients"
CREATE TABLE clients (
  id INT(11) NOT NULL AUTO_INCREMENT,
  nom VARCHAR(255) NOT NULL,
  prenom VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  date_creation DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

-- Création de la table "produits"
CREATE TABLE produits (
  id INT(11) NOT NULL AUTO_INCREMENT,
  nom VARCHAR(255) NOT NULL,
  stock INT(11) NOT NULL,
  photo VARCHAR(255) DEFAULT NULL,
  prix FLOAT(10,2) NOT NULL,
  PRIMARY KEY (id)
);

-- Création de la table "factures"
CREATE TABLE factures (
  id INT(11) NOT NULL AUTO_INCREMENT,
  client_id INT(11) NOT NULL,
  date_emission DATETIME DEFAULT CURRENT_TIMESTAMP,
  paye BOOLEAN DEFAULT FALSE,
  date_paiement DATETIME DEFAULT NULL,
  prix_total FLOAT(10,2) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (client_id) REFERENCES clients(id) ON DELETE CASCADE
);

-- Création de la table "produits_factures"
CREATE TABLE produits_factures (
  produit_id INT(11) NOT NULL,
  facture_id INT(11) NOT NULL,
  quantite INT(11) NOT NULL,
  PRIMARY KEY (produit_id, facture_id),
  FOREIGN KEY (produit_id) REFERENCES produits(id) ON DELETE CASCADE,
  FOREIGN KEY (facture_id) REFERENCES factures(id) ON DELETE CASCADE
);
