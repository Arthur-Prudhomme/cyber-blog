<template>
  <header class="header">
    <h1 @click="goHome" style="cursor: pointer">Blog</h1>
    <img @click="goHome" src="/images/logo.png" class="logo" alt="logo" width="50">
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
  padding: 0 20px;
  text-align:center;
  font-size: 16px;
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.logo{
  cursor:pointer;
}
</style>
