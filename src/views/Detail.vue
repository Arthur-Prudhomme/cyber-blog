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

const pages = [
  { 
    id: '1',
    content: 
    `# Saint-Nazaire - Cyberattaque 2024

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
  { 
    id: '2', 
    content: 
  `# Enjeux dans la Finance

  <a href="/images/mindmap.png"><img src="/images/mindmap.png" width="100%"/></a>` },

  { id: '3', content: `
  # Root-me : HTML - boutons désactivés
  ### Infos
  - Difficulté : 1/5
  - Url : [HTML - boutons désactivés](https://www.root-me.org/fr/Challenges/Web-Client/HTML-boutons-desactives)
  
  ### Compréhension
  - Objectifs
    - Utiliser l'inspecteur

  - Contexte technique
    - Un formulaire avec des champs disable

  ### Résolution
  - En utilisant l'inspecteur on peut modifier les champs et enlever les disable
  <a href="/images/challenge-1/challenge-1-begin.jpg"><img src="/images/challenge-1/challenge-1-begin.jpg" width="100%"/></a>
  - Le formulaire peut ensuite être validé avec n'importe quels identifiants
  <a href="/images/challenge-1/challenge-1-complete.jpg"><img src="/images/challenge-1/challenge-1-complete.jpg" width="100%"/></a>
  
  ### Résultat
  - Flag : HTMLCantStopYou

  ### Prévention
  - Le front ne devrait être que du style et pas des vérifications ou de la sécurité seulement de l'affichage, donc mettre
  des vrais vérifications dans le back
  ` },
  { id: '4', content: `
  # Root-me : Javascript - Authentification
  ### Infos
  - Difficulté : 1/5
  - Url : [Javascript - Authentification](https://www.root-me.org/fr/Challenges/Web-Client/Javascript-Authentification)
  
  ### Compréhension
  - Objectifs
    - Utiliser le débogueur / source

  - Contexte technique
    - Un formulaire à remplir mais nous n'avons pas les identifiants

  ### Résolution
  - En utilisant le débogueur on peut accéder au fichier js et donc voir les valeurs de comparaison
  <a href="/images/challenge-2/challenge-2-begin.jpg"><img src="/images/challenge-2/challenge-2-begin.jpg" width="100%"/></a>
  - En rentrant ainsi ses valeurs, la connection se fait
  <a href="/images/challenge-2/challenge-2-complete.jpg"><img src="/images/challenge-2/challenge-2-complete.jpg" width="100%"/></a>
  
  ### Résultat
  - Flag : sh.org

  ### Prévention
  - Ne pas mettre en clair dans le front des valeurs de sécurité
  ` },
  { id: '5', content: `
  # Root-me : Javascript - Source
  ### Infos
  - Difficulté : 1/5
  - Url : [Javascript - Source](www.root-me.org/fr/Challenges/Web-Client/Javascript-Source)
  
  ### Compréhension
  - Objectifs
    - Utiliser le débogueur / source

  - Contexte technique
    - Un alert où il faut mettre un mot de passe que l'on ne possède pas

  ### Résolution
  - En utilisant le débogueur on peut accéder au fichier js et donc voir la valeur de comparaison
  <a href="/images/challenge-3/challenge-3-begin.jpg"><img src="/images/challenge-3/challenge-3-begin.jpg" width="100%"/></a>
  - En rentrant ainsi le mot de passe, l'alert est validée
  <a href="/images/challenge-3/challenge-3-complete.jpg"><img src="/images/challenge-3/challenge-3-complete.jpg" width="100%"/></a>
  
  ### Résultat
  - Flag : 123456azerty

  ### Prévention
  - Ne pas mettre en clair dans le front des valeurs de sécurité
  ` },
  { id: '6', content: `
  # Root-me : Javascript - Authentification 2
  ### Infos
  - Difficulté : 1/5
  - Url : [Javascript - Authentification 2](https://www.root-me.org/fr/Challenges/Web-Client/Javascript-Authentification-2)
  
  ### Compréhension
  - Objectifs
    - Utiliser le débogueur / source

  - Contexte technique
    - Un alert où il faut mettre des identifiants que l'on ne possède pas

  ### Résolution
  - En utilisant le débogueur on peut accéder au fichier js et donc voir les valeurs de comparaison
  <a href="/images/challenge-4/challenge-4-begin.jpg"><img src="/images/challenge-4/challenge-4-begin.jpg" width="100%"/></a>
  - En rentrant ainsi les identifiants
  <a href="/images/challenge-4/challenge-4-username.jpg"><img src="/images/challenge-4/challenge-4-username.jpg" width="100%"/></a>
  <a href="/images/challenge-4/challenge-4-password.jpg"><img src="/images/challenge-4/challenge-4-password.jpg" width="100%"/></a>
  - L'alert est validée
  <a href="/images/challenge-4/challenge-4-complete.jpg"><img src="/images/challenge-4/challenge-4-complete.jpg" width="100%"/></a>
  
  ### Résultat
  - Flag : HIDDEN

  ### Prévention
  - Ne pas mettre en clair dans le front des valeurs de sécurité
  ` },
  { id: '7', content: `
  # Root-me : Javascript - Obfuscation 1
  ### Infos
  - Difficulté : 1/5
  - Url : [Javascript - Obfuscation 1](https://www.root-me.org/fr/Challenges/Web-Client/Javascript-Obfuscation-1)
  
  ### Compréhension
  - Objectifs
    - Utiliser le débogueur / source et la console

  - Contexte technique
    - Un alert où il faut mettre un mot de passe que l'on ne possède pas

  ### Résolution
  - En utilisant le débogueur on peut accéder au fichier js et donc voir la valeur de comparaison, mais cette dernière
  est dans un format illisible
  <a href="/images/challenge-5/challenge-5-begin.jpg"><img src="/images/challenge-5/challenge-5-begin.jpg" width="100%"/></a>
  - En utilisant la console pour réaliser la fonction unescape() se trouvant dans le js, on obtient le vrai mot de passe
  <a href="/images/challenge-5/challenge-5-solution.jpg"><img src="/images/challenge-5/challenge-5-solution.jpg" width="100%"/></a>
  - L'alert est validée
  <a href="/images/challenge-5/challenge-5-complete.jpg"><img src="/images/challenge-5/challenge-5-complete.jpg" width="100%"/></a>
  
  ### Résultat
  - Flag : cpasbiendurpassword

  ### Prévention
  - Ne pas mettre dans le front des valeurs de sécurité
  ` },
  { id: '8', content: `
  # Root-me : Javascript - Obfuscation 2
  ### Infos
  - Difficulté : 1/5
  - Url : [Javascript - Obfuscation 2](https://www.root-me.org/fr/Challenges/Web-Client/Javascript-Obfuscation-2)
  
  ### Compréhension
  - Objectifs
    - Utiliser le débogueur / source et la console

  - Contexte technique
    - Trouver le flag dans le js

  ### Résolution
  - En utilisant le débogueur on peut accéder au fichier js et donc récupérer la valeur, mais cette dernière
  est dans un format illisible
  <a href="/images/challenge-6/challenge-6-begin.jpg"><img src="/images/challenge-6/challenge-6-begin.jpg" width="100%"/></a>
  - En utilisant la console pour réaliser la fonction unescape() 2 fois en exécutant ensuite le résultat, 
  on obtient le flag
  <a href="/images/challenge-6/challenge-6-complete.jpg"><img src="/images/challenge-6/challenge-6-complete.jpg" width="100%"/></a>
  
  ### Résultat
  - Flag : hDufjdki156

  ### Prévention
  - Si cette valeur devait rester secrète, il ne fallait pas la mettre dans le front
  ` },
  { id: '9', content: `
  # Root-me : Javascript - Native code
  ### Infos
  - Difficulté : 2/5
  - Url : [Javascript - Native code](https://www.root-me.org/fr/Challenges/Web-Client/Javascript-Native-code)
  
  ### Compréhension
  - Objectifs
    - Utiliser le débogueur / source et utiliser des outils pour convertir le script

  - Contexte technique
    - Un alert où il faut mettre un mot de passe que l'on ne possède pas

  ### Résolution
  - En utilisant le débogueur on peut accéder au fichier js et voir que le script est chiffré
  <a href="/images/challenge-7/challenge-7-begin.jpg"><img src="/images/challenge-7/challenge-7-begin.jpg" width="100%"/></a>
  - En utilisant l'outil Javascript Unobfuscator on peut traduir le script
  <a href="/images/challenge-7/challenge-7-solution.jpg"><img src="/images/challenge-7/challenge-7-solution.jpg" width="100%"/></a>
  - Et ainsi obtenir le mot de passe et valider l'alert
  <a href="/images/challenge-7/challenge-7-complete.jpg"><img src="/images/challenge-7/challenge-7-complete.jpg" width="100%"/></a>
  
  ### Résultat
  - Flag : toto123lol

  ### Prévention
  - Ne pas mettre dans le front des valeurs de sécurité
  ` },
  { id: '10', content: `
  # Root-me : Javascript - Webpack
  ### Infos
  - Difficulté : 2/5
  - Url : [Javascript - Webpack](https://www.root-me.org/fr/Challenges/Web-Client/Javascript-Webpack)
  
  ### Compréhension
  - Objectifs
    - Obtenir le flag caché dans le fichier js d'origine

  - Contexte technique
    - Le site en vue.js est fait avec webpack qui bundle les fichier js et les rends "inaccessible"

  ### Résolution
  - En arrivant sur le site et en explorant le débogueur on obsèrve que malgré le fait que l'on puisse voir l'architecture,
  les fichiers js d'origines ne sont pas présents
  <a href="/images/challenge-8/challenge-8-begin.jpg"><img src="/images/challenge-8/challenge-8-begin.jpg" width="100%"/></a>
  <a href="/images/challenge-8/challenge-8-duck.jpg"><img src="/images/challenge-8/challenge-8-duck.jpg" width="100%"/></a>
  <a href="/images/challenge-8/challenge-8-mandarin-duck.jpg"><img src="/images/challenge-8/challenge-8-mandarin-duck.jpg" width="100%"/></a>
  - En recherchant sur Stack overflow ce qu'est le commentaire dans le fichier js, on découvre qu'il sagit du nom du
  vrai fichier
  <a href="/images/challenge-8/challenge-8-clue.jpg"><img src="/images/challenge-8/challenge-8-clue.jpg" width="100%"/></a>
  - En observant dans le débogueur le répertoire dans lequel se trouve les fichiers sourceMap on peut reformer l'url
  <a href="/images/challenge-8/challenge-8-débogueur.jpg"><img src="/images/challenge-8/challenge-8-débogueur.jpg" width="100%"/></a>
  - Une fois l'url reformée, il suffit de l'executer pour télécharger le fichier js d'origine
  <a href="/images/challenge-8/challenge-8-url.jpg"><img src="/images/challenge-8/challenge-8-url.jpg" width="100%"/></a>
  <a href="/images/challenge-8/challenge-8-download-file.jpg"><img src="/images/challenge-8/challenge-8-download-file.jpg" width="100%"/></a>
  - En ouvrant le fichier dans VSCode il ne fait pas beaucoup de sens
  <a href="/images/challenge-8/challenge-8-file.jpg"><img src="/images/challenge-8/challenge-8-file.jpg" width="100%"/></a>
  - Cependant en réalisant une recherche pour "flag" on trouve finalement la variable
  <a href="/images/challenge-8/challenge-8-solution.jpg"><img src="/images/challenge-8/challenge-8-solution.jpg" width="100%"/></a>
  
  ### Résultat
  - Flag : BecauseSourceMapsAreGreatForDebuggingButNotForProduction

  ### Prévention
  - Si cette valeur devait rester secrète, il ne fallait pas la mettre dans le front
  ` },
  { id: '11', content: `
  # Root-me : Javascript - Obfuscation 3
  ### Infos
  - Difficulté : 3/5
  - Url : [Javascript - Obfuscation 3](https://www.root-me.org/fr/Challenges/Web-Client/Javascript-Obfuscation-3)
  
  ### Compréhension
  - Objectifs
    - Utiliser le débogueur / source et la console

  - Contexte technique
    - Un alert où il faut mettre un mot de passe que l'on ne possède pas

  ### Résolution
  - En utlisant le débogueur on obsèrve une fonction qui semble comparer le mot de passe attendu
  <a href="/images/challenge-9/challenge-9-begin.jpg"><img src="/images/challenge-9/challenge-9-begin.jpg" width="100%"/></a>
  - En vérité cette fonction est un piège et ne sert à rien, en prenant la chaine qui n'est jamais appelé et en 
  réalisant, dans la console, la fonction unescape() puis String.fromCharCode(), comme dans la fonction, on trouve le
  mot de passe
  <a href="/images/challenge-9/challenge-9-solution.jpg"><img src="/images/challenge-9/challenge-9-solution.jpg" width="100%"/></a>
  
  ### Résultat
  - Flag : 786OsErtk12

  ### Prévention
  - Ne pas mettre dans le front des valeurs de sécurité
  ` },
  { id: '12', content: `
  # Root-me : XSS - Stockée 1
  ### Infos
  - Difficulté : 3/5
  - Url : [XSS - Stockée 1](https://www.root-me.org/fr/Challenges/Web-Client/XSS-Stockee-1)
  
  ### Compréhension
  - Objectifs
    - Volez le cookie de session de l’administrateur et utilisez le pour valider l’épreuve

  - Contexte technique
    - Un formulaire qui permet d'envoyer des messages à un admin

  ### Résolution
  - En se servant de la doc du défis on comprend que le XSS, comme l'injection sql, consiste à mettre un morceaux de code qui
  sera exécuté, dans le cas du XSS un script
  <a href="/images/challenge-10/challenge-10-begin.jpg"><img src="/images/challenge-10/challenge-10-begin.jpg" width="100%"/></a>
  - On écrit donc un script en se servant de webhook qui permet d'avoir des logs sur tout les appels, et de cette manière
  lorsque l'admin reçoit ce message, ce dernier récupère sa session avec le document.cookie
  <a href="/images/challenge-10/challenge-10-solution.jpg"><img src="/images/challenge-10/challenge-10-solution.jpg" width="100%"/></a>
  - Après quelque essais on peut récupérer le ADMIN_COOKIE
  <a href="/images/challenge-10/challenge-10-webhook.jpg"><img src="/images/challenge-10/challenge-10-webhook.jpg" width="100%"/></a>
  
  ### Résultat
  - Flag : NkI9qe4cdLIO2P7MIsWS8ofD6

  ### Prévention
  - Ne pas laisser du code être validé dans un champ de texte, par exemple en interdisant les caractères spéciaux
  ` },
  { id: '13', content: `
  # Root-me : AST - Deobfuscation
  ### Infos
  - Difficulté : 3/5
  - Url : [AST - Deobfuscation](https://www.root-me.org/fr/Challenges/Web-Client/AST-Deobfuscation)
  
  ### Compréhension
  - Objectifs
    - Convertir l'AST en code pour retrouver le flag

  - Contexte technique
    - On possède un fichier AST

  ### Résolution
  - On converti le fichier AST et on récupère le code
  <a href="/images/challenge-11/challenge-11-ast.jpg"><img src="/images/challenge-11/challenge-11-ast.jpg" width="100%"/></a>
  - Une fois exécuté, le code nous donne le flag
  <a href="/images/challenge-11/challenge-11-solution.jpg"><img src="/images/challenge-11/challenge-11-solution.jpg" width="100%"/></a>
  
  ### Résultat
  - Flag : g00d_j0b_easy_deobfuscation

  ### Prévention
  - Ne pas mettre une valeur secrète dans un AST car il est réversible
  ` }
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
