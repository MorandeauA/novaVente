<template>
  <div class="home">
    <h1 class="title">Bienvenue {{  storedEmail}} sur notre site de critiques de films</h1>
    <p class="subtitle">Vous pouvez trouver les dernières critiques et actualités cinématographiques ici.</p>
    <div class="cta-container">
      <router-link to="/film" class="cta-btn">Voir toutes les critiques</router-link>
    </div>
    
    <router-link to="/film" class="cta-btn"><img  style="width: 60px; height: 60px;" src="../assets/fl.png" alt="logo"></router-link>

  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import axios from 'axios';


export default {
  name: 'Home',
  components: {
    Header
  },
  mounted() {
    const storedEmail = localStorage.getItem('email');
    console.log('Email récupéré depuis le localStorage:', storedEmail);
  },
  methods : {
    async getUsers() {
      try {
        const response = await axios.get('http://localhost:3000/api/clients');
        this.users = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
}
</script>

<style scoped>
.home{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 15%;
  
}
</style>
