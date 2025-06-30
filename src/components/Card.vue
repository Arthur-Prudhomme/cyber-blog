<template>
  <div class="card" @click="goToDetail">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'AppCard',
  props: ['id', 'title', 'description'],
  methods: {
    goToDetail() {
      this.$router.push(`/detail/${this.id}`)
    }
  }
}
</script>

<style>
.card {
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  cursor: pointer;
  transition: background-color 0.2s;
}
.card:hover {
  background-color: #f9f9f9;
}
</style>
