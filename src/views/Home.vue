<template>
  <div class="home">
    
    <div class="filter">
      <select id="tag-select" v-model="selectedTag">
        <option value="all">Tous</option>
        <option v-for="tag in tags" :key="tag" :value="tag">
          {{ tag }}
        </option>
      </select>
    </div>
    
    <div class="cards-grid">
      <AppCard
        v-for="card in filteredPages"
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
import {pages} from '../data/pagesData.js'

export default {
  name: 'Home',
  components: { AppCard },
  data() {
    return {
      pages,
      selectedTag: 'all'
    }
  },
  computed: {
    tags() {
      const allTags = this.pages.flatMap(p => p.tag || [])
      return [...new Set(allTags)]
    },
    filteredPages() {
      if (this.selectedTag === 'all') return this.pages
      return this.pages.filter(p => p.tag.includes(this.selectedTag))
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
  height: calc(100vh-90); /* Assuming header is 64px */
  overflow-y: auto;
  padding: 16px;
  background-color: rgb(20, 20, 20);
}
.cards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 75vw;
  margin:auto;
  gap: 16px;
}

.filter {
  width: 75vw;
  margin:auto;
  display: flex;
  align-items: center;
  padding-bottom: 10px;
}
select {
  padding: 6px 10px;
  font-size: 16px;
  background-color: rgb(20, 20, 20);
  color:white;
  border-radius:10px;
}
</style>
