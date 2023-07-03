<template>
  <div class="flex-container">
    <h1 class="titre">Film</h1>
  </div>
  <hr>
  <br >
  <form @submit.prevent="addAvis">
      <label for="nom">Note:</label>
      <input type="number" id="nom" v-model="newAvis.note" required>

      <label for="nom">Film id:</label>
      <input type="number" id="nom" v-model="newAvis.film_id" required>

      <label for="nom">User id:</label>
      <input type="number" id="nom" v-model="newAvis.client_id" required>
      
      <label for="description">Description:</label>
      <textarea id="description" v-model="newAvis.commentaire" required></textarea>
    
            
      <button type="submit">Ajouter un avis</button>
    </form>

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
          <div>
          <button @click="showDetails(film)" style="cursor: pointer;">Voir détails</button>
          <button  @click="visible = true" style="cursor: pointer;">Ajouter commentaire</button>
          <!-- <div  v-for="client in clients" :key="client.id" >
          <div v-if=" client.nom === 'admin'"> -->
          <button @click="deleteFilm(film.id)">❌ Supprimer film</button> <!-- Bouton de suppression -->
        <!-- </div>
          </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="selectedFilm" class="modal">
  <div class="modal-content">
    <u><h2 class="dialog-titre">{{ selectedFilm.nom }}</h2></u>
  <br />
    <div class="dialog-flex-container">
      <div class="dialog-left">
        <img class="dialog-image" :src="selectedFilm.photo" alt="Photo du film">
        <p>{{ selectedFilm.content }}</p>
        <p>Note : {{ moyenneNotesDetails }} /5</p> <!-- Affichage de la moyenne -->

        <p>{{ selectedFilm.description }}</p>
      </div>
      <div class="dialog-right">
        <h3>Commentaires :</h3>
        <div class="avis-container">
         <div  v-for="critique in avis" :key="critique.id">
          <div class="avis" v-if="critique.id_film === selectedFilm.id">
          <div class="commentaire">
          <div  v-for="client in clients" :key="client.id" >
            <div class="avis" v-if="critique.id_client === client.id">
            <div class="nom">{{ client.prenom }}</div>
            </div>
          </div>
            <div class="date">{{ formatDate(critique.date_creation) }}</div>
            <div class="contenu">
              <br>
              <p>{{ critique.commentaire }}</p>
              <p class="note">{{ critique.note }}/5</p>
            </div>
          </div>
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
import Dialog from 'primevue/dialog';

export default {
  name: 'Film',
  data() {
    return {
      films: [],
      selectedFilm: null,
      selectedAvis: null,
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
      newAvis: {
        note: '',
        commentaire: '',
        film_id: '',
        client_id: ''
      },
    }
  },
  computed: {
    moyenneNotesDetails() {
      if (!this.selectedFilm) return 0;

      const notes = this.avis
        .filter(critique => critique.id_film === this.selectedFilm.id)
        .map(critique => critique.note);

      if (notes.length === 0) return 0;

      const sommeNotes = notes.reduce((acc, note) => acc + note);
      const moyenne = sommeNotes / notes.length;

      return moyenne.toFixed(1); // Renvoie la moyenne arrondie à 2 décimales
    }
  },
  mounted() {
    this.getFilms();
    this.getAvis();
    this.getClient();
  },
  methods: {
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
    this.selectedAvis = null;
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
  async getClient() {
    try {
      const response = await axios.get('http://localhost:3000/api/clients');
      this.clients = response.data;
    } catch (error) {
      console.log(error);
    }
  },
  async addAvis() {
      try {
        const response = await axios.post('http://localhost:3000/api/avis', {
          id_film: this.newAvis.film_id, // Remplacez FILM_ID par l'ID réel du film
          id_client: this.newAvis.client_id, 
          note: this.newAvis.note,
          commentaire: this.newAvis.commentaire
        });
        
        this.avis.push(response.data);
        this.closeDialog();
      } catch (error) {
        console.log(error);
      }
    },
  toggleShowFullNom(index) {
      // inverser la valeur pour le film à l'index donné
      this.showFullNom[index] = !this.showFullNom[index];
    },
    async addFilm() {
      if (this.newFilm.photo && !isValidURL(this.newFilm.photo) || this.newFilm.photo === '') {
        this.newFilm.photo = 'https://cdn.discordapp.com/attachments/1059803143547928586/1089236167813234840/Willem_morras_An_antique_Greek_illustration_depicting_the_trium_dd8e23ec-d61b-478e-a29c-6a407f9b29ed.png';
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
        async getAvisByFilm() {
      try {
        const response = await axios.get(`http://localhost:3000/api/films/${filmId}/avis`); // Remplacez FILM_ID par l'ID réel du film
        this.avis = response.data;
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

.avis-container {
    height: 400px; /* Hauteur maximale du conteneur */
    overflow-y: scroll; /* Ajoute une barre de défilement uniquement si nécessaire */
  }
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
  padding: 40px;
  max-width: 100%;
  max-height: 100%;
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
