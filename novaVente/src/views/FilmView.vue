<template>
  <div class="flex-container">
    <h1 class="titre">Film</h1>
  </div>
  <hr>
  <br >
  <button class="button-ajout" @click="openDialog">Ajouter un film</button>
      <!-- Dialog pour ajouter un film -->
      <div v-if="showDialog" class="dialog">
        <br>
    <div class="dialog-content">
      <form @submit.prevent="addFilm">
      <label for="nom">Nom:</label>
      <input type="text" id="nom" v-model="newFilm.nom" required>
      
      <label for="date_sortie">Date de sortie:</label>
      <input type="date" id="date_sortie" v-model="newFilm.date_sortie" required>
      
      <label for="description">Description:</label>
      <textarea id="description" v-model="newFilm.description" required></textarea>
      
      <label for="realisateur">Réalisateur:</label>
      <input type="text" id="realisateur" v-model="newFilm.realisateur" required>
      
      <label for="duree">Durée:</label>
      <input type="number" id="duree" v-model="newFilm.duree" required>
      
      <label for="photo">Photo:</label>
      <input type="text" id="photo" v-model="newFilm.photo">
            
      <button type="submit">Ajouter le film</button>
    </form>
    <br>
    <button class="btnajout" @click="closeDialog">❌ Fermer</button>
    </div>
  </div>

  <div class="film-list">
    <div class="film-container">
      <div class="film" v-for="film in films" :key="film.id">
        <img :src="film.photo" class="photo" alt="Photo du film">
        <div class="film-info">
          <h3 class="nom" @click="toggleShowFullNom(index)">{{ showFullNom[index] ? film.nom : reduceNom(film.nom) }}</h3>
          <p>{{ film.realisateur }}</p>
          <p>Note : {{ film.rating }}/5 </p>
          <div class="avis" v-for="critique in avis" :key="critique.id">
            <p>{{ critique.note }}/5</p>
            </div>
          <div>
          <button @click="showDetails(film)" style="cursor: pointer;">Voir détails</button>
          <button @click="showDetails(film)" style="cursor: pointer;">Ajouter commentaire</button>
          <button @click="deleteFilm(film.id)">❌ Supprimer film</button> <!-- Bouton de suppression -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="selectedFilm" class="modal">
  <div class="modal-content">
    <u><h2 class="dialog-titre">{{ selectedFilm.nom }}</h2></u>
    <div class="dialog-flex-container">
      <div class="dialog-left">
        <img class="dialog-image" :src="selectedFilm.photo" alt="Photo du film">
        <p>{{ selectedFilm.content }}</p>
        <p>Note : {{ selectedFilm.rating }}/5 </p>
        <p>{{ selectedFilm.description }}</p>
      </div>
      <div class="dialog-right">
        <div class="avis" v-for="critique in avis" :key="critique.id">
          <div class="commentaire">
            <div class="date">{{ critique.date_creation }}</div>
            <div class="contenu">
              <br>
              <p>{{ critique.commentaire }}</p>
              <p class="note">{{ critique.note }}/5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button  @click="selectedFilm = null">❌ Fermer</button>
  </div>
</div>


</template>



<script>
import axios from 'axios';

export default {
  name: 'Film',
  data() {
    return {
      films: [],
      selectedFilm: null,
      showFullNom: [],
      showDialog: false,
      newFilm: {
        nom: '',
        date_sortie: '',
        description: '',
        realisateur: '',
        duree: '',
        photo: ''
      },
    }
  },
  mounted() {
    this.getFilms();
    this.getAvis();
    console.log(this.avis);
  },
  methods: {
    reduceNom(nom) {
    if (nom.length > 20) {
      return nom.slice(0, 20) + '...';
    } else {
      return nom;
    }
  },
  showDetails(film) {
    this.selectedFilm = film;
  },
  closeDialog() {
    this.selectedFilm = null;
    this.showDialog = false;
  },
  async getFilms() {
    try {
      const response = await axios.get('http://localhost:3000/api/films');
      this.films = response.data;
      this.showFullNom = Array(this.films.length).fill(false);

    } catch (error) {
      console.log(error);
    }
  },
  async getAvis() {
    try {
      const response = await axios.get('http://localhost:3000/api/avis');
      this.avis = response.data;
    } catch (error) {
      console.log(error);
    }
  },
  toggleShowFullNom(index) {
      // inverser la valeur pour le film à l'index donné
      this.showFullNom[index] = !this.showFullNom[index];
    },
    async addFilm() {
      if (this.newFilm.photo && !isValidURL(this.newFilm.photo)) {
        this.newFilm.photo = '';
      }
      try {
        const response = await axios.post('http://localhost:3000/api/films', this.newFilm);
        console.log(this.newFilm);
        this.films.push(response.data);
        console.log(response.data);
        this.closeDialog();
      } catch (error) {
        console.log(error);
      }
    },
    async deleteFilm(filmId) {
      try {
        await axios.delete(`http://localhost:3000/api/films/${filmId}`);
        
        // Filtrer le film supprimé de la liste des films
        this.films = this.films.filter(film => film.id !== filmId);
      } catch (error) {
        console.log(error);
      }
    },
    openDialog() {
      this.showDialog = true;
    },
  }
}
function isValidURL(str) {
  const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // IP address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
  return !!pattern.test(str);
}
</script>

<style scoped>
.btnajout{
  margin-left: 47%;
  cursor: pointer;
}
.dialog-flex-container {
  display: flex;
}

.dialog-left {
  flex: 1;
  /* Ajoutez ici d'autres styles pour la partie de gauche du dialogue */
}

.dialog-right {
  flex: 1;
  /* Ajoutez ici d'autres styles pour la partie de droite du dialogue */
}

.button-ajout{
  text-align: center;
  align-items: center;
  margin-left: 47%;
  cursor: pointer;
}
.titre{
  margin-top: 2%;
  text-align: center;
}
.truncated {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
.nom {
  font-weight: bold;
  height: 20%;
  text-align: center;
  text-decoration: underline black;
}
.photo {
  width: 80%;
  height: 50%;
}
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
  width: 280px;
  height: 340px;
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


.film h2 {
  width: 80%;
  align-items: center;
  text-align: center;
}
.avis {
  margin-bottom: 10px;
  background-color: lightgray;
  padding: 10px;
}

.commentaire {
  display: flex;
  justify-content: space-between;
}

.date {
  font-weight: bold;
  margin-bottom: 5px;
}

.note {
  float: right;
  margin-top: 0;
}

</style>
