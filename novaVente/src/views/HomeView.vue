<template>
  <div class="home">
    <h1 class="title">Bienvenue sur notre site de critiques de films</h1>
    <p class="subtitle">Vous pouvez trouver les dernières critiques et actualités cinématographiques ici.</p>
    <div class="cta-container">
      <router-link to="/film" class="cta-btn">Voir toutes les critiques</router-link>
    </div>
    
    <router-link to="/film" class="cta-btn"><img  style="width: 60px; height: 60px;" src="../assets/fl.png" alt="logo"></router-link>

  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: {
    Header
  }
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
