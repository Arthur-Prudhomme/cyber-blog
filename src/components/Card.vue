<template>
  <div class="card" @click="goToDetail">
    <img :src="image" alt="" class="card-image" />
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: ['id', 'title', 'description', 'image'],
  methods: {
    goToDetail() {
      this.$router.push(`/detail/${this.id}`)
    }
  }
}
</script>

<style>
.card {
  background-color: rgb(40, 40, 40);
  border-radius: 8px;
  padding: 12px;
  cursor: pointer;
  transition: transform 0.2s;
  color: white;
}
.card:hover {
  transform: scale(1.02);
  background-color: rgb(50, 50, 50);
}
.card-image {
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 8px;
}
</style>
