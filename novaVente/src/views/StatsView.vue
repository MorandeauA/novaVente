<template>
  <div class="stats-page">
    <h1 class="titre">Mes statistiques</h1>
    <hr>
    <br />
    <br />
    <h2>Films aimés : </h2>
    <p> {{ filmsAimes }}</p>
    
    <h3>Commentaires laissés : </h3> 
    <p> {{ commentaires }}</p>
  </div>
</template>

<script>
export default {
  name: 'StatsPage',
  data() {
    return {
      filmsAimes: 0,
      commentaires: 0
    }
  },
  created() {
    // Appeler votre API ou votre backend pour récupérer les données
    // de statistiques des films aimés et des commentaires laissés.
    // Puis mettre à jour les données du composant avec les résultats.
    this.filmsAimes = 10;
    this.commentaires = 5;
  }
}
</script>

<style scoped>
.stats-page{
  align-items: center;
  text-align: center;
  
}
.titre{
  margin-top: 2%;
text-align: center;
}
hr{
  border: none; 
  border-top: 2px solid #333;
   margin-left: 42%;
    margin-right: 42%;
}
h2{
  text-align: center;
}
</style>
