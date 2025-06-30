<template>
  <div class="home">
    <div class="cards-grid">
      <AppCard
        v-for="card in cards"
        :key="card.id"
        :id="card.id"
        :title="card.title"
        :description="card.description"
        :image="card.image"
      />
    </div>
  </div>
</template>

<script>
import AppCard from '../components/Card.vue'

export default {
  name: 'Home',
  components: { AppCard },
  data() {
    return {
      cards: [
        { id: 1, title: 'Saint-Nazaire', description: 'Rechercher une actualité cyber',image: '/images/saint-nazaire.jpg' },
        { id: 2, title: 'Enjeux dans la Finance', description: 'Rechercher des enjeux de cybersécurité dans un secteur',image: '/images/finance.jpg' },
        { id: 3, title: 'Article 3', description: 'Description de la carte 3',image: '/images/background.jpg' },
        { id: 4, title: 'Article 4', description: 'Description de la carte 4',image: '/images/background.jpg' },
      ]
    }
  }
}
</script>

<style>
html, body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: sans-serif;
}

.home {
  height: calc(100vh - 64px); /* Assuming header is 64px */
  overflow-y: auto;
  padding: 16px;
  background-color: rgb(20, 20, 20);
}
.cards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 2em 15em 0 15em;
  gap: 16px;
}
</style>
