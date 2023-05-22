<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <div v-if="isUserLoggedIn" class="dashboard-content">
      <!-- Affichage des données du dashboard -->
      <p>Bienvenue, {{ user.prenom }}!</p>
      <p>Vous êtes connecté en tant que {{ user.email }}.</p>
      <!-- Autres éléments spécifiques du dashboard -->
    </div>
    <div v-else class="dashboard-content">
      <p>Vous devez être connecté pour accéder au dashboard.</p>
      <router-link to="/connexion">Se connecter</router-link>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isUserLoggedIn: false,
      user: null
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
      } else {
        // Utilisateur non connecté
        this.isUserLoggedIn = false;
        this.user = null;
      }
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

