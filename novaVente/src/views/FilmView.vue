<template>
  <h1 class="titre">Film</h1>
  <hr>
  <div class="film-list">
    <div class="film-container">
      <div class="film" v-for="film in films" :key="film.id">
        <img :src="film.photo" alt="Photo du film">
        <div class="film-info">
          <h2>{{ film.nom }}</h2>
          <p>{{ film.realisteur }}</p>
          <p>Note : {{ film.rating }}/5 </p>
          <div class="etoiles">
            <span v-if="film.rating >= 1" class="etoile-jaune">★</span>
            <span v-else class="etoile-grise">★</span>
            <span v-if="film.rating >= 2" class="etoile-jaune">★</span>
            <span v-else class="etoile-grise">★</span>
            <span v-if="film.rating >= 3" class="etoile-jaune">★</span>
            <span v-else class="etoile-grise">★</span>
            <span v-if="film.rating >= 4" class="etoile-jaune">★</span>
            <span v-else class="etoile-grise">★</span>
            <span v-if="film.rating >= 5" class="etoile-jaune">★</span>
            <span v-else class="etoile-grise">★</span>
          </div>
          <div>
          <button @click="showDetails(film)" style="cursor: pointer;">Voir détails</button>
          <button @click="showDetails(film)" style="cursor: pointer;">Ajouter commentaire</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="selectedFilm" class="modal">
    <div class="modal-content">
      <u><h2 class="dialog-titre">{{ selectedFilm.nom }}</h2></u>
      <img  class="dialog-image" :src="selectedFilm.photo" alt="Photo du film">
      <p>{{ selectedFilm.content }}</p>
      <p>Note : {{ selectedFilm.rating }}/5 </p>
      <!-- ajouter d'autres informations sur le film ici -->
      <span @click="selectedFilm = null" style="cursor: pointer;">❌</span>
      <button @click="selectedFilm = null">Fermer</button>
    </div>
  </div>
</template>



<script>
export default {
  name: 'Film',
  data() {
    return {
      films: [
        {
          id: 1,
          nom: 'Le Parrain',
          date_sortie: '1972-03-24',
          description: 'Un classique du cinéma, mettant en vedette Marlon Brando et Al Pacino.',
          realisteur: 'Francis Ford Coppola',
          duree : '2h55',
          photo: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Lotus_flower_%28978659%29.jpg',
          rating: 2
        },
        {
          id: 2,
          nom: 'La La Land',
          date_sortie: '2016-12-09',
          description: 'Une comédie musicale romantique mettant en vedette Emma Stone et Ryan Gosling.',
          realisteur: 'Damien Chazelle',
          duree : '2h08',
          photo: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Lotus_flower_%28978659%29.jpg',
          rating: 1
        },
        {
          id: 3,
          nom: 'Joker',
          date_sortie: '2019-10-04',
          description: 'Un film de super-héros sombre mettant en vedette Joaquin Phoenix dans le rôle du Joker.',
          realisteur: 'Todd Phillips',
          duree : '2h02',
          photo: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Lotus_flower_%28978659%29.jpg',
          rating: 5
        },
        {
          id: 4,
          nom: 'Joker',
          date_sortie: '2019-10-04',
          description: 'Un film de super-héros sombre mettant en vedette Joaquin Phoenix dans le rôle du Joker.',
          realisteur: 'Todd Phillips',
          duree : '2h02',
          photo: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Lotus_flower_%28978659%29.jpg',
          rating: 2
        },
        {
          id: 4,
          nom: 'Joker',
          date_sortie: '2019-10-04',
          description: 'Un film de super-héros sombre mettant en vedette Joaquin Phoenix dans le rôle du Joker.',
          realisteur: 'Todd Phillips',
          duree : '2h02',
          photo: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Lotus_flower_%28978659%29.jpg',
          rating: 4
        },
        {
          id: 4,
          nom: 'Joker',
          date_sortie: '2019-10-04',
          description: 'Un film de super-héros sombre mettant en vedette Joaquin Phoenix dans le rôle du Joker.',
          realisteur: 'Todd Phillips',
          duree : '2h02',
          photo: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Lotus_flower_%28978659%29.jpg',
          rating: 3
        }
      ],
      selectedFilm: null

    }
  },
  methods: {
  showDetails(film) {
    this.selectedFilm = film;
  },
  closeDialog() {
    this.selectedFilm = null;
  }
}

}
</script>
<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: antiquewhite;
  padding: 20px;
  max-width: 80%;
  max-height: 80%;
  overflow: auto;
}

.modal button {
  margin-top: 20px;
}

.dialog-image{
  width: 40%;
}
.dialog-titre{
  text-align: center;
}
.etoiles {
  font-size: 24px;
  line-height: 1;
  display: inline-block;
  align-items: center;
  text-align: center;
}

.etoiles span {
  color: #ccc;
}

.etoiles .etoile-jaune {
  color: #ffc107;
}

.film-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(250px, auto);
  grid-gap: 20px;

}

.film-list{

  margin-left: 14%;
  margin-right: 10%;

  margin-top: 2%;
}

.titre{
  margin-top: 2%;
text-align: center;
}

hr{
  border: none; 
  border-top: 2px solid #333;
   margin-left: 47%;
    margin-right: 47%;
}
.film-info {
  padding: 10px;
  margin-right: 20%;
  background-color: #DCDCDC	;
}
.film img {
  width: 80%;
}

.film h2 {
  width: 80%;
  align-items: center;
  text-align: center;
}

</style>
