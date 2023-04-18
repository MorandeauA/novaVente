-- Création de la table "clients"
CREATE TABLE clients (
  id INT(11) NOT NULL AUTO_INCREMENT,
  prenom VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  date_creation DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

-- Création de la table "films"
CREATE TABLE films (
  id INT(11) NOT NULL AUTO_INCREMENT,
  nom VARCHAR(255) NOT NULL,
  date_sortie DATE NOT NULL,
  description TEXT NOT NULL,
  realisateur VARCHAR(255) NOT NULL,
  duree INT(11) NOT NULL,
  photo VARCHAR(1024) DEFAULT NULL,
  PRIMARY KEY (id)
);

-- Création de la table "avis"
CREATE TABLE avis (
  id INT(11) NOT NULL AUTO_INCREMENT,
  id_client INT(11) NOT NULL,
  id_film INT(11) NOT NULL,
  note INT(2) NOT NULL,
  commentaire TEXT NOT NULL,
  date_creation DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  FOREIGN KEY (id_client) REFERENCES clients(id),
  FOREIGN KEY (id_film) REFERENCES films(id)
);