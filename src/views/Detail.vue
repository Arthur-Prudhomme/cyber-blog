<template>
  <div class="detail">
    <h2>Détail de la page {{ id }}</h2>
    <div class="text-box">
      Ceci est le contenu spécifique de la page {{ id }}.
    </div>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  props: ['id']
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
