<template>
  <h1 class="titre">Film</h1>
  <div class="film-list">
    <div class="film-container">
      <div class="film" v-for="film in films" :key="film.id">
        <img :src="film.photo" alt="Photo du film">
        <div class="film-info">
          <h2>{{ film.nom }}</h2>
          <p>{{ film.content }}</p>
          <p>Note : {{ film.rating }}/10</p>
        </div>
      </div>
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
          rating: 9
        },
        {
          id: 2,
          nom: 'La La Land',
          date_sortie: '2016-12-09',
          description: 'Une comédie musicale romantique mettant en vedette Emma Stone et Ryan Gosling.',
          realisteur: 'Damien Chazelle',
          duree : '2h08',
          photo: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Lotus_flower_%28978659%29.jpg',
          rating: 8
        },
        {
          id: 3,
          nom: 'Joker',
          date_sortie: '2019-10-04',
          description: 'Un film de super-héros sombre mettant en vedette Joaquin Phoenix dans le rôle du Joker.',
          realisteur: 'Todd Phillips',
          duree : '2h02',
          photo: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Lotus_flower_%28978659%29.jpg',
          rating: 7
        },
        {
          id: 4,
          nom: 'Joker',
          date_sortie: '2019-10-04',
          description: 'Un film de super-héros sombre mettant en vedette Joaquin Phoenix dans le rôle du Joker.',
          realisteur: 'Todd Phillips',
          duree : '2h02',
          photo: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Lotus_flower_%28978659%29.jpg',
          rating: 7
        },
        {
          id: 4,
          nom: 'Joker',
          date_sortie: '2019-10-04',
          description: 'Un film de super-héros sombre mettant en vedette Joaquin Phoenix dans le rôle du Joker.',
          realisteur: 'Todd Phillips',
          duree : '2h02',
          photo: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Lotus_flower_%28978659%29.jpg',
          rating: 7
        },
        {
          id: 4,
          nom: 'Joker',
          date_sortie: '2019-10-04',
          description: 'Un film de super-héros sombre mettant en vedette Joaquin Phoenix dans le rôle du Joker.',
          realisteur: 'Todd Phillips',
          duree : '2h02',
          photo: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Lotus_flower_%28978659%29.jpg',
          rating: 7
        }
      ]
    }
  }
}
</script>
<style scoped>
img {
  width: 69px;
  height: 40px;
}
.film-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(150px, auto);
  grid-gap: 20px;
}

.film-list{

  margin-left: 14%;

  margin-top: 2%;
}

.titre{
text-align: center;
}

</style>
