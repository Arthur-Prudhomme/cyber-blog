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
        { id: 1, title: 'Page A', description: 'Description de la carte A' },
        { id: 2, title: 'Page B', description: 'Description de la carte B' },
        { id: 3, title: 'Page C', description: 'Description de la carte C' },
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
