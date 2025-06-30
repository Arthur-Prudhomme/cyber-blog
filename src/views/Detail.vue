<template>
  <div class="detail">
    <div class="text-box" >
        <h2>{{ pageData?.title || 'Page introuvable' }}</h2>
        <div class="content" v-if="pageData" v-html="renderedHtml"></div>
        <div v-else>
          Aucune donnée pour cette page.
        </div>
    </div>
  </div>
</template>

<script>
import { marked } from 'marked'

const pages = [
  { 
    id: '1', 
    title: 'Saint-Nazaire', 
    content: 
    `

# Saint-Nazaire - Cyberattaque 2024

## Cible

La ville de Sain-Nazaire a subit en 2024 une cyberattaque utilisant un LockBit, 
un cryptovirus dont le fonctionnement consiste à paralyser les serveurs d’une entreprise, 
une association ou une administration.

## Comment ?

Il n'y a pas de faute humaine dans le processus, ce n'est pas un salarié qui a cliqué sur un mauvais lien par exemple,
les hackers ont craqué le mot de passe d'un compte technique et ont accédé au système ainsi.

Le mot de passe associé à cette adresse a été forcé de manière assez rudimentaire, par force brute ou par 
l’intermédiaire d’une base de données précédemment piratée et partagée en ligne.

Une fois en possession du mail, les attaquants ont pu s’en prendre aux serveurs de l’agglomération.

Une demande de rançon a été déposée par les hackers mais les services de la Ville n’ont pas ouvert le fichier 
potentiellement dangereux, sachant qu'il n’a jamais été envisagé de payer la rançon dans le premier temps.

Après plusieurs audits et vérification, il n'y a eu aucune fuite de données lors de cette attaque.
Cependant, malgré que cette attaque n'a touchée seulement 1/3 des serveurs de la Ville et de l’Agglomération, 
c’est le système entier qui a dû être arrêté et qu’il doit être complètement reconstruit car les risques de 
contamination sont trop importants.

De nombreux chantiers de réinstallation ont été lancé,
impliquant des prestataires extérieurs, éditeurs et installateurs de logiciels 
(gestion de la paie, des finances, des congés, du courrier, des menus de cantines, des inscriptions 
aux centres de loisirs, etc. ).

Ces opérations réprésente des coûts supplémentaires qui ce sont accumulé avec le temps et 
dont il n’'était pas possible d’évaluer sur le moment avec précision.

## Coût

Aujourd'hui, nous savons que la cyberattaque avec les surcoûts importants qu'elle a engendrée, 
du fait de la sollicitation de prestataires spécialisés et d’experts techniques pour assister les services municipaux, 
avec la remise en service des applications métiers a également nécessité l’intervention des éditeurs de logiciels,
le montant s'élève à __**400 000 €**__ pour la Ville et __**100 000 €**__ pour l’Agglomération.

De nombreux services aux usagers (état civil, urbanisme, standards téléphonique, CCAS…) ou établissements 
(Médiathèques, Conservatoire par exemple) ont repris très rapidement leurs activités en s’adaptant à la situation.

Néanmoins, les difficultés informatiques demeurent et le temps que l’ensemble des logiciels soient réinstallés, 
il peut y avoir des impacts importants sur les délais de traitement des demandes, en outre de nombreuses 
équipes à revenir au papier et au crayon.

Le volet judiciaire de l’attaque est suivi par la section cyber du parquet de Paris.

- [Site officiel – Saint-Nazaire](https://www.saintnazaire.fr/actualite/cyberattaque-le-point-sur-la-situation/)
- [Le Figaro – Article](https://www.lefigaro.fr/nantes/cyberattaque-a-saint-nazaire-un-an-apres-le-tiers-des-applications-toujours-hors-service-20250416)
`
},
  { id: '2', title: 'Page 2', content: 'Texte propre à la page 2.' },
  { id: '3', title: 'Page 3', content: 'Informations spécifiques à la page 3.' },
  { id: '4', title: 'Page 4', content: 'Informations spécifiques à la page 4.' },
]

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
  margin: 2em 25em 0 25em;
  padding-bottom: 10em;
  text-align: center;
}

.content{
  text-align: initial;
}
</style>
