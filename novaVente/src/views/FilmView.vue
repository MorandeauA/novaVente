<template>
  <div>
    <h1>Film</h1>
    <ul>
      <li v-for="review in reviews" :key="review.id">
        <h2>{{ review.title }}</h2>
        <p>{{ review.content }}</p>
        <p>Note : {{ review.rating }}/10</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Film',
  data() {
    return {
      reviews: [
        {
          id: 1,
          title: 'Le Parrain',
          content: 'Un classique du cinéma, mettant en vedette Marlon Brando et Al Pacino.',
          rating: 9
        },
        {
          id: 2,
          title: 'La La Land',
          content: 'Une comédie musicale romantique mettant en vedette Emma Stone et Ryan Gosling.',
          rating: 8
        },
        {
          id: 3,
          title: 'Joker',
          content: 'Un film de super-héros sombre mettant en vedette Joaquin Phoenix dans le rôle du Joker.',
          rating: 7
        }
      ]
    }
  }
}
</script>
