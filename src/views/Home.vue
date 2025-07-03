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
        { id: 3, title: 'Root-Me : HTML - boutons désactivés', description: 'Root-me challenge',image: '/images/challenge-1/challenge-1-begin.jpg' },
        { id: 4, title: 'Root-Me : Javascript - Authentification', description: 'Root-me challenge',image: '/images/challenge-2/challenge-2-begin.jpg' },
        { id: 5, title: 'Root-Me : Javascript - Source', description: 'Root-me challenge',image: '/images/challenge-3/challenge-3-begin.jpg' },
        { id: 6, title: 'Root-Me : Javascript - Authentification 2', description: 'Root-me challenge',image: '/images/challenge-4/challenge-4-begin.jpg' },
        { id: 7, title: 'Root-Me : Javascript - Obfuscation 1', description: 'Root-me challenge',image: '/images/challenge-5/challenge-5-begin.jpg' },
        { id: 8, title: 'Root-Me : Javascript - Obfuscation 2', description: 'Root-me challenge',image: '/images/challenge-6/challenge-6-begin.jpg' },
        { id: 9, title: 'Root-Me : Javascript - Native code', description: 'Root-me challenge',image: '/images/challenge-7/challenge-7-begin.jpg' },
        { id: 10, title: 'Root-Me : Javascript - Webpack', description: 'Root-me challenge',image: '/images/challenge-8/challenge-8-begin.jpg' },
        { id: 11, title: 'Root-Me : Javascript - Obfuscation 3', description: 'Root-me challenge',image: '/images/challenge-9/challenge-9-begin.jpg' },
        { id: 12, title: 'Root-Me : XSS - Stockée 1', description: 'Root-me challenge',image: '/images/challenge-10/challenge-10-begin.jpg' },
        { id: 13, title: 'Root-Me : AST - Deobfuscation', description: 'Root-me challenge',image: '/images/challenge-11/challenge-11-ast.jpg' },
        { id: 14, title: 'WannaCry (2017)', description: 'Cyber-attaque',image: '/images/wannaCry.jpg' },
        { id: 15, title: 'Log4Shell (2021)', description: 'Cyber-attaque',image: '/images/log4Shell.jpg' },
        { id: 16, title: 'SolarWinds (2020)', description: 'Cyber-attaque',image: '/images/solarWinds.jpg' },
        { id: 17, title: 'NotPetya (2017)', description: 'Cyber-attaque',image: '/images/notPetya.jpg' },
        { id: 18, title: 'Target (2013)', description: 'Cyber-attaque',image: '/images/target.jpg' },
        { id: 19, title: 'Question finale', description: 'Résumé cyber-attaques',image: '/images/conclusion.jpg' },
        { id: 20, title: 'Lazarus Group', description: 'Groupe de hackers',image: '/images/background.jpg' },
        { id: 21, title: 'Lapsus$', description: 'Groupe de hackers',image: '/images/background.jpg' },
        { id: 22, title: 'Conti/BlackCat', description: 'Groupe de hackers',image: '/images/background.jpg' },
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
</style>
