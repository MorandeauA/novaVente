INSERT INTO clients (prenom, email, password, date_creation) VALUES
  ('Pierre', 'pierre.dupont@mail.com', 'Azerty1234', NOW()),
  ('Sophie', 'sophie.martin@mail.com', 'MdpSecure5678', NOW()),
  ('Julie', 'julie.garcia@mail.com', 'MotdepasseComplex9', NOW()),
  ('Antoine', 'antoine.leroy@mail.com', 'MDPfort10', NOW()),
  ('Marie', 'marie.chevalier@mail.com', 'MonMdp12345', NOW()),
  ('Lucas', 'lucas.roux@mail.com', 'MotDePasseSecret6', NOW()),
  ('Chloe', 'chloe.nguyen@mail.com', 'MdpUltraSecurisé11', NOW()),
  ('Alexandre', 'alexandre.leblanc@mail.com', 'MdpSuperFort12', NOW()),
  ('Camille', 'camille.durand@mail.com', 'mdp123456', NOW()),
  ('Maxime', 'maxime.meyer@mail.com', 'Secret123!', NOW());

INSERT INTO films (nom, date_sortie, description, realisateur, duree, photo) VALUES
  ('La La Land', '2016-12-07', 'Comédie musicale romantique', 'Damien Chazelle', 128, 'lalaland.jpg'),
  ('Le Seigneur des anneaux : La Communauté de l\'anneau', '2001-12-19', 'Film de fantasy épique', 'Peter Jackson', 178, 'seigneurdesanneaux1.jpg'),
  ('Le Parrain', '1972-03-15', 'Film de gangsters', 'Francis Ford Coppola', 175, 'leparrain.jpg'),
  ('Interstellar', '2014-11-05', 'Film de science-fiction', 'Christopher Nolan', 169, 'interstellar.jpg'),
  ('Forrest Gump', '1994-11-02', 'Comédie dramatique', 'Robert Zemeckis', 142, 'forrestgump.jpg'),
  ('Les Évadés', '1995-09-22', 'Film de prison', 'Frank Darabont', 142, 'lesevades.jpg'),
  ('Pulp Fiction', '1994-05-21', 'Film de gangsters', 'Quentin Tarantino', 154, 'pulpfiction.jpg'),
  ('Le Roi Lion', '1994-06-15', 'Film d\'animation', 'Roger Allers, Rob Minkoff', 89, 'leroilion.jpg'),
  ('Inception', '2010-07-16', 'Film de science-fiction', 'Christopher Nolan', 148, 'inception.jpg'),
  ('Le Voyage de Chihiro', '2001-07-20', 'Film d\'animation', 'Hayao Miyazaki', 125, 'levoyagedechihiro.jpg');


INSERT INTO `avis` (`id`, `id_client`, `id_film`, `note`, `commentaire`, `date_creation`) VALUES ('1', '6', '5', '4', 'Excellent film !', current_timestamp());