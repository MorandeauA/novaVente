<template>
  <div class="header">
    <router-link to="/">
      <div class="logo">CRITIKS</div>
    </router-link>
    <img class="img" src="../assets/logoNova.png" alt="Logo" />
    <nav>
      <ul>
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="/film">Films</router-link></li>
        <li v-if="isConnected"><router-link to="/stats">Profil</router-link></li>
        <li><router-link to="/connexion">Connexion</router-link></li>
        <li v-if="isConnected"><button @click="logout">Déconnexion</button></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isConnected: true
    }
  },
  methods: {
    logout() {
      // Supprimer le token et les informations utilisateur du local storage
      localStorage.removeItem('token');
      localStorage.removeItem('userData');
      // Redirigez vers la page de connexion
      this.$router.push('/connexion');
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #16161a;
  padding: 20px 20px;
  color: white;
  font-size: 24px;
}
.img{
  width: 80px;
  height: 80px;
  margin-left: 14%;
}
.logo {
  font-size: 36px;
  font-weight: bold;
  color: white;
}

nav ul {
  display: flex;
  list-style: none;
}

nav ul li {
  margin-right: 20px;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
}

nav ul li a:hover {
  color: #f2f2f2;
}

button {
  background-color: #16161a;
  border-style: none;
  color: white;
  font-size: 24px;

}
</style>
