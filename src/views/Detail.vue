<template>
  <div class="detail">
    <h2>{{ pageData?.title || 'Page introuvable' }}</h2>
    <div v-if="pageData" class="text-box">
      {{ pageData.content }}
    </div>
    <div v-else>
      Aucune donnée pour cette page.
    </div>
  </div>
</template>

<script>
const pages = [
  { id: '1', title: 'Page A', content: 'Contenu unique de la page A.' },
  { id: '2', title: 'Page B', content: 'Texte propre à la page B.' },
  { id: '3', title: 'Page C', content: 'Informations spécifiques à la page C.' },
]

export default {
  name: 'Detail',
  props: ['id'],
  computed: {
    pageData() {
      return pages.find(page => page.id === this.id)
    }
  }
}
</script>

<style>
.detail {
  padding: 20px;
}

.text-box {
  background: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin-top: 16px;
}
</style>
