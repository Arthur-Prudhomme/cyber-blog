<template>
  <div class="detail">
    <div class="text-box" >
        <div class="content" v-if="pageData" v-html="renderedHtml"></div>
        <div v-else>
          Aucune donnée pour cette page.
        </div>
    </div>
  </div>
</template>

<script>
import { marked } from 'marked'
import {pages} from '../data/pagesData.js'

export default {
  name: 'Detail',
  props: ['id'],
  computed: {
    pageData() {
      return pages.find(page => page.id === this.id)
    },
    renderedHtml() {
      return this.pageData ? marked(this.pageData.content) : ''
    }
  }
}
</script>

<style>
html, body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: rgb(20, 20, 20);
}

.detail {
  min-height:100vh;
}

.text-box {
  padding: 16px;
  margin-top: 16px;

  color: rgb(255, 255, 255);
  margin: auto;
  width: 50vw;
  padding-bottom: 10em;
  text-align: center;
}

a{
  color:rgb(87, 147, 215);
}

.content{
  text-align: initial;
}
</style>
