<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <div v-if="isUserLoggedIn" class="dashboard-content">
      <!-- Affichage des données du dashboard -->
      <p>Bienvenue, {{ user.prenom.charAt(0).toUpperCase() + user.prenom.slice(1) }}!</p>
      <p>Date de création de votre compte : {{ formatDate(user.date_creation) }}</p> 
      <p>Vous avez donné votre avis sur les films suivants :</p>
      <ul>
        <li v-for="movie in ratedMovies" :key="movie.id">
          {{ movie.nom }}
          <ul>
            <li v-for="avis in getAvisForFilm(movie.id)" :key="avis.id">
              vous avez noté {{ avis.note }}/5, et commenté : {{ avis.commentaire }}
            </li>
          </ul>
        </li> 
      </ul>     
    </div>
    <div v-else class="dashboard-content">
      <p>Vous devez être connecté pour accéder au dashboard.</p>
      <router-link to="/connexion">Se connecter</router-link>
    </div>
  </div>
</template>


<script>
import axios from 'axios';
export default {
  data() {
    return {
      isUserLoggedIn: false,
      user: null,
      ratedMovies: [],
      avisFilter: [],
    };
  },
  created() {
    this.checkUserLogin();
  },
  methods: {
    checkUserLogin() {
      const userData = JSON.parse(localStorage.getItem('userData'));
      // Vérification de la connexion de l'utilisateur (par exemple, vérifier la présence d'un token valide)
      const token = localStorage.getItem('token');
      if (token && userData) {
        // Utilisateur connecté
        this.isUserLoggedIn = true;
        this.user = userData;
        this.getUserRatedMovies();
        this.getAllAvis();
      } else {
        // Utilisateur non connecté
        this.isUserLoggedIn = false;
        this.user = null;
      }
    },
    getUserRatedMovies() {
      // Récupération des films notés par l'utilisateur
      axios
      .get(`http://localhost:3000/api/avis/films-notes/${this.user.id}`)
      .then(response => {
        this.ratedMovies = response.data;
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des films notés par l\'utilisateur', error);
      });      
    },
    getAllAvis() {
      //Récupération des avis
      axios
      .get(`http://localhost:3000/api/avis/`)
      .then(response => {
        this.avisFilter = response.data;
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des avis', error);
      });
    },
    getAvisForFilm(filmId) {
      return this.avisFilter.filter(avis => avis.id_film === filmId);
    },
    formatDate(dateString) {
    const date = new Date(dateString);
    const options = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return date.toLocaleDateString('fr-FR', options);
  },
  }
};
</script>

<style scoped>
.dashboard {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.dashboard h1 {
  font-size: 24px;
  font-weight: bold;
}

.dashboard-content {
  margin-top: 20px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
}

.dashboard-content p {
  margin-bottom: 10px;
}

.dashboard-content router-link {
  color: blue;
  text-decoration: underline;
}
</style>

