CRITIKS 
Cette application est une plateforme de notation de films où les utilisateurs peuvent noter et laisser des commentaires sur les films qu'ils ont visionnés. 
Elle permet de consulter les films disponibles, d’ajouter des films, de noter les films, 
d'ajouter des commentaires et de voir les évaluations des autres utilisateurs. 
Il y a aussi un dashboard personnel pour les utilisateurs connectés, 
qui leur affiche des stats concernant leur profil (films notés, notes attribuées, commentaires laissés …)
 
Fonctionnalités
 
- Inscription et connexion des utilisateurs.
- Consultation de la liste des films disponibles.
- Ajout d’un nouveau film.
- Suppression d’un film.
- Notation des films par les utilisateurs connectés.
- Ajout de commentaires sur les films.
- Consultation des évaluations et commentaires des autres utilisateurs.
- Dashboard spécifique à chaque utilisateur.
 
Technologies utilisées
 
- Vue.js : Framework JavaScript pour la construction de l'interface utilisateur.
- Node.js : Plateforme JavaScript côté serveur.
- Express : Framework Node.js pour la création d'applications Web.
- MySQL : Base de données utilisée pour stocker les informations des utilisateurs, des films et des avis.
 
Configuration du projet
 
1. Cloner le repository du projet :
 
git clone https://github.com/MorandeauA/novaVente.git

2. Installer les dépendances du projet :
 
cd novaVente
npm install

3. Configurer la connexion à la base de données :
 
- Assurez-vous d'avoir un serveur web local comme XAMPP.
- Lancez Apache et MySQL.
Importez les fichiers présents dans le dossier « bdd » dans phpMyAdmin, en commençant par create_db.sql, puis create_tables.sql et pour avoir des données de films, insert.sql
 
4. Lancer l’api :

- Ouvrez un nouveau terminal.
cd api
node index.js

5. Lancer le front :
 
- Revenez sur le précédent terminal 
npm run dev
- Ctrl + click sur le lien localhost:5173

6. Utilisez l’application

-vous pouvez naviguer dans l’application, visualiser les films précédemment importés.
-créez un compte en cliquant sur « connexion », puis sur « cliquez ici » pour créer un compte.
-une fois votre compte créé, identifiez-vous.
-vous pouvez ajouter un avis ou un film en suivant les formulaires présents sur la page « films », en vous référant à votre base de donnée pour connaitre les Ids demandés.
-vous pouvez consulter vos stats dans l’onglet profil.
-vous pouvez vous déconnecter.
 
AUTEURS
 
Ambroise MORANDEAU, Alvin LUCAS (https://github.com/MorandeauA), (https://github.com/alvinlucas)
 

