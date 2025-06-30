<template>
  <div class="home">
    <div class="cards-container">
      <AppCard
        v-for="card in cards"
        :key="card.id"
        :id="card.id"
        :title="card.title"
        :description="card.description"
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
        { id: 1, title: 'Saint-Nazaire', description: 'Rechercher une actualité cyber' },
        { id: 2, title: 'Article 2', description: 'Description de la carte 2' },
        { id: 3, title: 'Article 3', description: 'Description de la carte 3' },
        { id: 4, title: 'Article 4', description: 'Description de la carte 4' },
      ]
    }
  }
}
</script>

<style>
.home {
  height: calc(100vh - 64px); /* Assuming header is 64px */
  overflow-y: auto;
  padding: 16px;
  background-color: #f0f0f0;
}
</style>
