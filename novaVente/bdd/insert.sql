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

INSERT INTO `films` (`id`, `nom`, `date_sortie`, `description`, `realisateur`, `duree`, `photo`) VALUES
(2, 'La La Land', '2016-12-07', 'Comédie musicale romantique', 'Damien Chazelle', 128, 'https://fr.web.img4.acsta.net/pictures/16/11/10/13/52/169386.jpg'),
(3, 'Le Seigneur des anneaux : La Communauté de l\'anneau', '2001-12-19', 'Film de fantasy épique', 'Peter Jackson', 178, 'https://m.media-amazon.com/images/I/513N2WS7ENL._AC_SY445_.jpg'),
(4, 'Le Parrain', '1972-03-15', 'Film de gangsters', 'Francis Ford Coppola', 175, 'https://fr.web.img2.acsta.net/pictures/22/01/14/08/39/1848157.jpg'),
(5, 'Interstellar', '2014-11-05', 'Film de science-fiction', 'Christopher Nolan', 169, 'https://fr.web.img6.acsta.net/pictures/14/09/24/12/08/158828.jpg'),
(6, 'Forrest Gump', '1994-11-02', 'Comédie dramatique', 'Robert Zemeckis', 142, 'https://fr.web.img4.acsta.net/pictures/15/10/13/15/12/514297.jpg'),
(7, 'Les Évadés', '1995-09-22', 'Film de prison', 'Frank Darabont', 142, 'https://static.fnac-static.com/multimedia/Images/FR/NR/af/f0/5e/6221999/1540-1/tsp20140828153605/Les-Evades-DVD.jpg'),
(8, 'Pulp Fiction', '1994-05-21', 'Film de gangsters', 'Quentin Tarantino', 154, 'https://www.ecranlarge.com/media/cache/160x213/uploads/image/001/121/7p8x4u3o3p1jzmbqny3zaloby3m-861.jpg'),
(9, 'Le Roi Lion', '1994-06-15', 'Film d\'animation', 'Roger Allers, Rob Minkoff', 89, 'https://fr.web.img6.acsta.net/c_310_420/pictures/22/09/20/12/10/2512840.jpg'),
(10, 'Inception', '2010-07-16', 'Film de science-fiction', 'Christopher Nolan', 148, 'https://www.ecranlarge.com/media/cache/160x213/uploads/image/001/164/inception-affiche-francaise-1164840.png'),
(11, 'Le Voyage de Chihiro', '2001-07-20', 'Film d\'animation', 'Hayao Miyazaki', 125, 'https://www.glenat.com/sites/default/files/images/livres/couv/9782344029602-001-T.jpeg');


INSERT INTO `avis` (`id`, `id_client`, `id_film`, `note`, `commentaire`, `date_creation`) VALUES ('1', '6', '5', '4', 'Excellent film !', current_timestamp());