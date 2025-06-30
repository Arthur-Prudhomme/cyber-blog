<template>
  <header class="header">
    <h1 @click="goHome" style="cursor: pointer">Cyber-Blog</h1>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  methods: {
    goHome() {
      this.$router.push('/')
    }
  }
}
</script>

<style>
.header {
  background-color: rgb(8, 8, 8);
  color: white;
  padding: 4px;
  text-align:center;
  font-size: 16px;
}
</style>
