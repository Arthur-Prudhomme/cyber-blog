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
    `
<img src="/images/saint-nazaire.jpg" style="width:100%; height:200px; object-fit:cover; object-position:center;"/>

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
  { 
    id: '2', 
    content: 
    `
  # Enjeux dans la Finance
  
  <a href="/images/mindmap.png"><img src="/images/mindmap.png" width="100%"/></a>` },

  { id: '3', content: `
  <img src="/images/rootme.jpg" style="width:100%; height:200px; object-fit:cover; object-position:center;"/>

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
  <img src="/images/rootme.jpg" style="width:100%; height:200px; object-fit:cover; object-position:center;"/>
  
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
  <img src="/images/rootme.jpg" style="width:100%; height:200px; object-fit:cover; object-position:center;"/>

  # Root-me : Javascript - Source
  ### Infos
  - Difficulté : 1/5
  - Url : [Javascript - Source](https://www.root-me.org/fr/Challenges/Web-Client/Javascript-Source)
  
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
  <img src="/images/rootme.jpg" style="width:100%; height:200px; object-fit:cover; object-position:center;"/>

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
  <img src="/images/rootme.jpg" style="width:100%; height:200px; object-fit:cover; object-position:center;"/>

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
  <img src="/images/rootme.jpg" style="width:100%; height:200px; object-fit:cover; object-position:center;"/>

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
  <img src="/images/rootme.jpg" style="width:100%; height:200px; object-fit:cover; object-position:center;"/>

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
  <img src="/images/rootme.jpg" style="width:100%; height:200px; object-fit:cover; object-position:center;"/>

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
  <img src="/images/rootme.jpg" style="width:100%; height:200px; object-fit:cover; object-position:center;"/>

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
  <img src="/images/rootme.jpg" style="width:100%; height:200px; object-fit:cover; object-position:center;"/>

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
  <img src="/images/rootme.jpg" style="width:100%; height:200px; object-fit:cover; object-position:center;"/>

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
  ` },
  { id: '14', content: `
  <img src="/images/wannaCry.jpg" style="width:100%; height:200px; object-fit:cover; object-position:center;"/>

  # WannaCry (2017)
  ### Vulnérabilité exploitée
  - WannaCry a exploité une vulnérabilité dans le protocole SMBv1 de Microsoft Windows, identifiée comme CVE-2017-0144.
  - Cette faille, surnommée EternalBlue, avait été initialement développée par la NSA puis rendue publique par le groupe de hackers Shadow Brokers en avril 2017.
  - Microsoft avait pourtant publié un correctif (MS17-010) en mars 2017, deux mois avant l’attaque, mais de nombreuses machines ne l’avaient pas appliqué.
  
  ### Déroulement de l'attaque
  - Le 12 mai 2017, le ransomware WannaCry s’est propagé à grande échelle, utilisant EternalBlue pour infecter les ordinateurs via SMB.
  - Une fois la machine infectée, WannaCry chiffré les fichiers et affichait une demande de rançon de 300 à 600 $ en Bitcoin, avec un compte à rebours.
  - Il se comportait comme un ver informatique, se propageant automatiquement à d’autres machines vulnérables sur le réseau.
  - L’attaque a ralenti grâce à un kill switch découvert accidentellement par un chercheur en sécurité connu sous le pseudo MalwareTech.

  ### Victimes
  - L’attaque a touché plus de 230 000 ordinateurs dans 150 pays.
  - Victimes notables :
    - NHS (système de santé britannique)
    - Renault-Nissan
    - FedEx
    - Deutsche Bahn
    - Ministères et universités en Chine, Russie, Inde, etc.

  ### Impacts
  - Systèmes paralysés (urgences, transports, usines).
  - Perturbation massive des soins au NHS, avec des opérations annulées.
  - Fichiers chiffrés, données parfois perdues définitivement.
  - Confiance dans la cybersécurité fortement ébranlée à l’échelle mondiale.

  ### Coût et taille de l'entreprise
  - Le coût total estimé mondialement est compris entre 4 et 8 milliards de dollars.
  - Aucune rançon significative n’a été payée : les pirates n’avaient pas mis en place un système efficace pour suivre les paiements.
  - Les entreprises touchées étaient de toutes tailles, des hôpitaux publics aux multinationales.

  ### Comment s'en protéger ?
  - Appliquer rapidement les mises à jour de sécurité (MS17-010 dans ce cas).
  - Désactiver SMBv1 sur les systèmes Windows.
  - Utiliser un antivirus à jour et des pare-feux correctement configurés.
  - Sauvegarder régulièrement les données hors-ligne.
  - Sensibiliser les employés aux risques de phishing et aux bonnes pratiques.

  ### Pourquoi est-ce difficile à éviter ?
  - Beaucoup de systèmes (notamment dans la santé et l’industrie) utilisent des logiciels obsolètes non patchés.
  - Manque de budget et de compétences en cybersécurité dans certains secteurs.
  - Propagation automatique : une seule machine non protégée peut contaminer tout un réseau.
  - Les correctifs existent souvent, mais la gestion des mises à jour est négligée.
  
  ### Dans le contexte de votre entreprise, que feriez-vous pour l'éviter ?
  - Mettre à jour les systèmes aux versions les plus stables

  ### Sources
  - [Microsoft Security Bulletin MS17-010 - Critical](https://learn.microsoft.com/en-us/security-updates/securitybulletins/2017/ms17-010)
  - [Massive ransomware infection hits computers in 99 countries](https://www.bbc.com/news/technology-39901382)
  - [NIST Report](https://nvlpubs.nist.gov/nistpubs/ir/2018/NIST.IR.8200.pdf)
  
  ` },
  { id: '15', content: `
  <img src="/images/log4Shell.jpg" style="width:100%; height:200px; object-fit:cover; object-position:center;"/>

  # Log4Shell (2021)
  ### Vulnérabilité exploitée
  - La faille Log4Shell (CVE-2021-44228) est une vulnérabilité critique découverte dans Apache Log4j 2, une bibliothèque de journalisation Java très utilisée.
  - Elle permettait l'exécution de code à distance (RCE) via une simple chaîne de texte malveillante enregistrée dans les logs, grâce à la fonctionnalité de lookup JNDI.
  - Notée 10/10 sur l’échelle CVSS.

  ### Déroulement de l'attaque
  - La faille a été rendue publique le 9 décembre 2021, bien qu'elle ait été exploitée plusieurs jours avant sa divulgation.
  - Un attaquant pouvait insérer une chaîne dans un champ de formulaire, un entête HTTP, un pseudo de jeu, etc.
  - Log4j récupérait cette URL, déclenchait une requête JNDI, et exécutait le code distant renvoyé par le serveur malveillant.
  - La simplicité de l’exécution (une seule ligne dans un log) a permis une explosion d’attaques automatisées en quelques heures.

  ### Victimes
  - Des milliers d’entreprises et de services web ont été affectés, notamment :
    - Apple, Amazon, Twitter, Google, Steam, Minecraft, Cloudflare, etc.
    - Le service Minecraft Java Edition a été un des premiers ciblés, via les champs de chat.
  - Des attaques ont visé aussi bien les grandes entreprises que les systèmes open source ou auto-hébergés.

  ### Impacts
  - Accès non autorisé à des serveurs internes, vol de données, déploiement de malware et de cryptominers.
  - De nombreux groupes APT (Chine, Iran, Corée du Nord) ont exploité la faille pour du cyberespionnage.
  - Le CERT allemand (BSI) a qualifié la faille de "catastrophique".

  ### Coût et taille de l'entreprise
  - Impossible à quantifier précisément, mais l’impact est considéré comme l’un des plus importants de l’histoire du logiciel open source.
  - L’entreprise concernée directement par le composant vulnérable (la Apache Software Foundation) est une organisation à but non lucratif.
  - Des coûts de patching massif, audits de sécurité, et mises à jour de logiciels tiers ont été rapportés dans toutes les grandes entreprises.

  ### Comment s'en protéger ?
  - Mettre à jour Log4j vers la version 2.17.1 ou ultérieure, où la vulnérabilité est corrigée.
  - Désactiver les lookups JNDI si la mise à jour immédiate n'est pas possible.
  - Analyser les journaux et le trafic réseau pour détecter les tentatives d’exploitation.
  - Utiliser des WAFs ou IDS/IPS pour bloquer les signatures d’attaques connues.
  - Mettre en place une gestion stricte des dépendances dans les projets logiciels.

  ### Pourquoi est-ce difficile à éviter ?
  - Log4j est utilisé de manière indirecte par des milliers de logiciels et librairies Java.
  - Les entreprises ignoraient parfois qu’elles utilisaient Log4j, ce qui a compliqué la détection de l’exposition.
  - Il est difficile de patcher immédiatement tous les services critiques en production.
  - La faille est très facile à exploiter et largement automatisée.

  ### Dans le contexte de votre entreprise, que feriez-vous pour l'éviter ?
  - Mettre à jour les systèmes aux versions les plus stables
  - Gestion stricte des dépendances dans les projets

  ### Sources
  - [CISA Apache Log4j Vulnerability Guidance](https://www.cisa.gov/news-events/news/apache-log4j-vulnerability-guidance)
  - [Wired : The Internet Is on Fire](https://www.wired.com/story/log4j-flaw-hacking-internet/)
  
  ` },
  { id: '16', content: `
  <img src="/images/solarWinds.jpg" style="width:100%; height:200px; object-fit:cover; object-position:center;"/>

  # SolarWinds (2020)
  ### Vulnérabilité exploitée
  - Le piratage de SolarWinds n’a pas exploité une vulnérabilité logicielle classique, mais une chaîne d'approvisionnement logicielle ("supply chain attack").
  - Les attaquants ont compromis le processus de compilation du logiciel Orion de SolarWinds, y injectant un malware furtif nommé SUNBURST.
  - Ce malware était ensuite diffusé automatiquement aux clients via une mise à jour légitime du logiciel.

  ### Déroulement de l'attaque
  - L’attaque a commencé dès mars 2020, mais n’a été découverte qu’en décembre 2020 par l’entreprise de cybersécurité FireEye, elle-même victime.
  - Le malware SUNBURST a été introduit dans des mises à jour logicielles d’Orion entre mars et juin 2020, installées par environ 18 000 clients.
  - Une fois installé, SUNBURST établissait une communication discrète avec un serveur de commande & contrôle (C2), permettant à l’attaquant de choisir les cibles à compromettre davantage.
  - Une deuxième phase manuelle permettait aux attaquants de voler des données ou de déployer d’autres outils d’intrusion.

  ### Victimes
  - Environ 18 000 organisations ont reçu la mise à jour corrompue.
  - Parmi les cibles confirmées :
    - U.S. Departments : Trésor, Commerce, Énergie, Justice, Homeland Security.
    - Entreprises privées : Microsoft, Cisco, Intel, FireEye, VMWare.
    - Organisations internationales : OTAN, agences gouvernementales de l’UE.

  ### Impacts
  - Espionnage massif : vol d'e-mails, de documents internes, et de certificats d'accès.
  - Compromission de chaînes de confiance au sein de l’écosystème logiciel.
  - Perturbation des relations diplomatiques, notamment entre les États-Unis et la Russie.
  - Une enquête fédérale a conclu que le groupe responsable est probablement lié au SVR, les services de renseignement russes.

  ### Coût et taille de l'entreprise
  - SolarWinds, une entreprise américaine spécialisée dans les logiciels de gestion d'infrastructure IT, comptait plus de 300 000 clients avant l’attaque.
  - En 2021, le coût estimé pour les entreprises victimes et les gouvernements dépasse 100 millions de dollars, sans compter les coûts indirects (réputation, audits, législation).
  - Microsoft à lui seul a indiqué avoir mobilisé 500 ingénieurs pour répondre à la menace.

  ### Comment s'en protéger ?
  - Mettre en place une surveillance rigoureuse de la chaîne d’approvisionnement logicielle.
  - Renforcer les contrôles d'intégrité sur les processus de compilation et de livraison.
  - Déployer une détection comportementale avancée sur les réseaux (EDR, XDR).
  - Appliquer une politique de moindre privilège et segmenter les réseaux.
  - Superviser les accès à privilèges et auditer les connexions sortantes anormales.

  ### Pourquoi est-ce difficile à éviter ?
  - Les attaques de la supply chain sont discrètes, longues à détecter, et touchent les logiciels de confiance.
  - Même des clients ayant de fortes mesures de sécurité n’ont pas pu anticiper une menace venant d’un fournisseur légitime.
  - Le niveau de sophistication des attaquants (APT29/SVR) était tel que la détection immédiate était quasiment impossible.
  
  ### Dans le contexte de votre entreprise, que feriez-vous pour l'éviter ?
  - Protéger et contrôler les accès à privilèges.

  ### Sources
  - [NIST Supply Chain](https://csrc.nist.gov/pubs/sp/800/161/r1/ipd)
  - [Highly Evasive Attacker Leverages SolarWinds](https://cloud.google.com/blog/topics/threat-intelligence/evasive-attacker-leverages-solarwinds-supply-chain-compromises-with-sunburst-backdoor?hl=en)

  ` },
  { id: '17', content: `
  <img src="/images/notPetya.jpg" style="width:100%; height:200px; object-fit:cover; object-position:center;"/>

  # NotPetya (2017)
  ### Vulnérabilité exploitée
  - NotPetya exploitait notamment la faille EternalBlue dans SMBv1 (CVE-2017-0144), la même que celle utilisée par WannaCry, permettant l’exécution de code à distance.
  - Elle utilisait aussi CVE-2017-0199, une vulnérabilité dans Microsoft Office, et volait des identifiants via Mimikatz pour se propager latéralement sur le réseau.
  - Le malware a été diffusé initialement par une mise à jour compromise du logiciel de comptabilité ukrainien M.E.Doc, utilisée massivement dans les entreprises locales.

  ### Déroulement de l'attaque
  - L'attaque a commencé le 27 juin 2017, en Ukraine, via une mise à jour malveillante du logiciel M.E.Doc.
  - Une fois installé, NotPetya se propageait automatiquement dans le réseau via EternalBlue, PsExec, et WMIC.
  - Il chiffrait les fichiers critiques et le MBR (Master Boot Record), rendant les machines inaccessibles.
  - Bien qu’il affichait une demande de rançon, NotPetya était en réalité un wiper, rendant les données irrécupérables.

  ### Victimes
  - L’attaque a commencé en Ukraine mais s’est rapidement propagée à l’échelle mondiale.
  - Victimes notables :
    - Maersk (géant du transport maritime)
    - Rosneft (Russie)
    - Merck (pharma)
    - Mondelez (alimentation)
    - Saint-Gobain (industrie)
    - Ministères, banques et infrastructures ukrainiennes
  
  ### Impacts
  - Paralysie de systèmes industriels, chaînes logistiques, et réseaux d’entreprise.
  - Des milliers de machines rendues inutilisables, pertes massives de données.
  - Maersk a dû réinstaller 45 000 PC et 4 000 serveurs.
  - L’attaque a été attribuée par les gouvernements occidentaux au groupe Sandworm, lié au GRU, le renseignement militaire russe.

  ### Coût et taille de l'entreprise
  - Le coût total mondial est estimé entre 10 et 12 milliards de dollars, ce qui fait de NotPetya l’attaque la plus coûteuse de l’histoire jusqu’à ce jour.
  - Maersk a déclaré un coût direct de 300 millions de dollars, Merck plus de 870 millions.
  - L’attaque a touché des entreprises de toute taille, mais surtout de grandes multinationales.

  ### Comment s'en protéger ?
  - Appliquer les mises à jour de sécurité Windows (notamment celles corrigeant SMBv1).
  - Désactiver SMBv1 sur tous les systèmes.
  - Segmenter le réseau pour limiter la propagation.
  - Utiliser des outils EDR pour détecter les mouvements latéraux.
  - Mettre en place des sauvegardes hors-ligne et des plans de reprise d’activité.

  ### Pourquoi est-ce difficile à éviter ?
  - NotPetya s'est diffusé via un fournisseur logiciel local de confiance, difficile à surveiller pour les entreprises étrangères.
  - Les mécanismes de propagation automatiques (SMB, PsExec, WMIC) rendent l'attaque rapide et incontrôlable une fois qu’une seule machine est infectée.
  - L’usage d’un wiper déguisé en ransomware a trompé de nombreuses entreprises sur la véritable nature de l’attaque.

  ### Dans le contexte de votre entreprise, que feriez-vous pour l'éviter ?
  - Mettre à jour les systèmes aux versions les plus stables.
  - Segmenter le réseau pour limiter la propagation.

  ### Sources
  - [Vulnérabilité d’exécution de code à distance dans le serveur SMB Windows](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2017-0144)
  - [Cisco Talos Blog](https://blog.talosintelligence.com/worldwide-ransomware-variant/)
  - [Global ransomware attack causes turmoil](https://www.bbc.com/news/technology-40416611)

  ` },
  { id: '18', content: `
  <img src="/images/target.jpg" style="width:100%; height:200px; object-fit:cover; object-position:center;"/>

  # Target (2013)
  ### Vulnérabilité exploitée
  - Les attaquants ont exploité un accès réseau indirect via un sous-traitant, Fazio Mechanical, une entreprise de chauffage/ventilation (HVAC).
  - Le fournisseur avait accès au portail de gestion des factures et de maintenance de Target, ce qui a permis aux hackers de pénétrer dans le réseau interne.
  - Ensuite, un malware de type RAM scraper (BlackPOS) a été déployé sur les terminaux de paiement (POS) pour intercepter les données de cartes bancaires directement en mémoire.
  
  ### Déroulement de l'attaque
  - Le piratage a eu lieu entre novembre et décembre 2013, en pleine période des fêtes.
  - Le malware POS a été installé sur plus de 1 700 caisses enregistreuses dans les magasins Target.
  - Les données volées comprenaient les numéros de cartes de crédit/débit, les dates d’expiration et les codes de sécurité (CVV).
  - Les informations collectées étaient ensuite envoyées à des serveurs distants contrôlés par les attaquants.

  ### Victimes
  - Environ 110 millions de clients ont été affectés :
    - 40 millions de cartes de crédit/débit compromises.
    - 70 millions d’enregistrements supplémentaires contenant des noms, adresses, numéros de téléphone et e-mails.
  - Les détenteurs de cartes de banques américaines (JPMorgan, Chase, Bank of America, etc.) ont été les plus exposés.
  
  ### Impacts
  - Perte de confiance massive de la part des consommateurs.
  - Des milliers de cartes ont été revendues sur le dark web.
  - Démission du CEO de Target, Gregg Steinhafel, en mai 2014.
  - Multiplication des poursuites judiciaires et des enquêtes réglementaires.
  - Le piratage a précipité l’adoption accélérée des cartes à puce EMV aux États-Unis.
  
  ### Coût et taille de l'entreprise
  - Target Corp. est l’un des plus grands détaillants des États-Unis, avec plus de 1 900 magasins à l’époque.
  - Le coût total de la cyberattaque est estimé à plus de 292 millions de dollars, dont :
    - 18,5 millions $ en règlement avec 47 États américains.
    - 10 millions $ en indemnisations de clients.
    - 100 millions $ investis pour renforcer la sécurité.

  ### Comment s'en protéger ?
  - Limiter les accès réseau tiers et segmenter le réseau interne.
  - Surveiller les connexions de fournisseurs externes avec des contrôles MFA.
  - Utiliser des systèmes de détection d’intrusion (IDS) pour les POS.
  - Appliquer une analyse comportementale des flux réseau et des dispositifs.
  - Mettre en œuvre un programme de gestion des risques fournisseurs.

  ### Pourquoi est-ce difficile à éviter ?
  - Les grandes entreprises ont souvent des partenaires tiers peu sécurisés (chaîne faible).
  - Les POS sont des systèmes critiques souvent mal surveillés.
  - Les alertes avaient été générées mais non traitées à temps par le SOC de Target.
  - Les outils de sécurité étaient présents mais mal configurés ou sous-utilisés.

  ### Dans le contexte de votre entreprise, que feriez-vous pour l'éviter ?
  - Mettre à jour les systèmes aux versions les plus stables.
  - Segmenter le réseau pour limiter la propagation.

  ### Sources
  - [Target Hackers Broke in Via HVAC Company](https://krebsonsecurity.com/2014/02/target-hackers-broke-in-via-hvac-company/)

  ` },
  { id: '19', content: `
  <img src="/images/conclusion.jpg" style="width:100%; height:200px; object-fit:cover; object-position:center;"/>

  # Question finale

  ### Que déduisez-vous de toutes ces attaques ?
  - La diversité des vecteurs d’attaque est énorme :
    - Vulnérabilité logicielle non corrigée (WannaCry, Log4Shell)
    - Attaque par chaîne d’approvisionnement (SolarWinds, NotPetya, Target)
    - Exploitation de partenaires ou fournisseurs externes peu sécurisés (Target)
  - Même des entreprises disposant de moyens considérables (Microsoft, Maersk, Merck, Target) peuvent être touchées si elles négligent certains maillons faibles : 
    - Systèmes obsolètes
    - Configurations mal sécurisées
    - Dépendance excessive à des tiers
  - Le facteur humain et organisationnel est clé :
    - Beaucoup de ces attaques auraient pu être détectées ou atténuées plus tôt si les alertes avaient été prises au sérieux ou si les processus de gestion des vulnérabilités étaient matures.
    - L'absence de segmentation réseau, de détection comportementale ou d'authentification forte a aggravé l’impact.
  - Les conséquences sont graves, même pour des ransomwares simulés :
    - Certaines attaques comme NotPetya ont été déguisées en ransomwares, mais visaient en réalité à détruire, pas à rançonner.
    - Cela démontre que la motivation peut être géopolitique, et non seulement financière.
  
  ### Quel conseil appliqueriez-vous pour éviter à votre entreprise de se faire toucher par une attaque similaire ?

  - Maintenir à jour tous les systèmes et logiciels
    - Appliquer les correctifs de sécurité dès leur publication, notamment dans le cas de failles critiques comme EternalBlue ou Log4j.
  - Segmenter le réseau et limiter les accès
    - Isoler les environnements critiques pour empêcher une propagation.
  - Surveiller les partenaires et fournisseurs tiers
    - Appliquer une gestion rigoureuse des risques fournisseurs.
    - Restreindre leurs accès aux seuls services nécessaires.
  - Déployer des outils de détection avancés
    - Utiliser des solutions EDR/XDR, analyse comportementale, SIEM, détection de mouvement latéral et trafic sortant suspect.
  - Former les équipes et simuler des incidents
    - Sensibilisation des collaborateurs, mais aussi exercices de réponse à incident, audits de crise, et plan de reprise d’activité.
  - Gestion des accès
    - Ne jamais accorder plus de droits que nécessaire à un utilisateur, un service, ou un tiers.
  ` },
  { id: '20', content: `
  # Lazarus Group

  ### Identification du groupe
  - Nom(s) : 
    - Lazarus Group
    - APT38
    - Guardians of Peace,
    - Whois Team
    - TraderTraitor
  
  - Origine présumée :
    - Corée du Nord, opère sous l’égide du Reconnaissance General Bureau (RGB), service de renseignement militaire.
  
  - Affiliations : 
    - État nord-coréen, soutenu par le gouvernement. Liens avec APT38, Andariel, Kimsuky.
  
  - Motivations : 
    - Vol financier, principalement via crypto-monnaies, pour financer les programmes nucléaire et balistique de Pyongyang
    
    - Espionnage et sabotage, notamment contre des cibles gouvernementales.

  ### Historique des opérations
  - [2009–2012] :	Opération Troy	DDoS contre sites sud-coréens et américains, malwares Mydoom/Dozer
  
  - [2011] :	Ten Days of Rain	DDoS sophistiqués visant médias, banques, infrastructure SK
  
  - [2013] :	DarkSeoul	Wiper contre chaînes TV sud-coréennes, institutions financières
  
  - [2014] :	Sony Pictures Hack	Vol/effacement de ~100 To data, extorsion via « Guardians of Peace »
  
  - [2016] :	Bangladesh Bank Heist	Tentative de vol de ~951 M$, ~81 M$ réussis via SWIFT
  
  - [2017] :	WannaCry	Ransomware global via EternalBlue, ~200 000 machines touchées
  
  - [2019] :	Attaques ElectricFish	Détection de nouveaux malwares, plusieurs vols (ex. 49 M$ Koweït)
  
  - [2020] :	Pharma / COVID‑19	Spear‑phishing ciblant AstraZeneca et autres
  
  - [2022] :	Axie Infinity (Ronin)	Vol de crypto ≃ 620 M$
  
  - [2022] :	Harmony Horizon Bridge	Vol de 100 M$
  
  - [2023] :	Atomic Wallet, Stake.com…	Vols > 100 M$ et 41 M$ respectivement
  
  - [2025] :	Bybit	Vol record de 1,5 Md$ (Ethereum) 

  ### Arsenal technique
  - Malwares
    - WannaCry, AppleJeus, DTrack, RATANKBA, COPPERHEDGE, FALLCHILL, ElectricFish, Ghost RAT, AuditCred, Bankshot…
  
  - Méthodes d’intrusion
    - spear‑phishing (emails, LinkedIn, fausses offres d’emploi), watering‑holes, compromission de chaîne d’approvisionnement (3CX, JumpCloud), exploit de zero-day (EternalBlue), faux apps cryptos (AppleJeus).
  
  - Infrastructure
    - C2 en trois niveaux avec SSL, distribution géographique, hébergements bulletproof, VPN (SoftEther), abuse de DropBox, Telegram, Google Drive

  ### Victimologie
  - Secteurs ciblés
    - Crypto‑finance : exchanges (Bybit, Atomic Wallet, Stake…), ponts DeFi (Ronin, Harmony), services associés
    - Banques traditionnelles & SWIFT (Bangladesh, Ecuador, Taïwan, Pologne, Mexique…)
    - Médias / divertissement (Sony)
    - Recherche pharmaceutique (COVID‑19)
    - Gouvernements et infrastructures critiques (Corée du Sud, USA)

  - Géographie : 
    - Monde entier, avec concentration sur les Amériques, Asie (SK, Japon), Europe.

  - Sélection des cibles : 
    - Institutions riches en liquidités (crypto), systèmes vulnérables, utilisateurs ciblés via ingénierie sociale.

  ### Particularités
  - Signatures techniques :
    - Chiffrement Spritz (variante RC4), multi‑étapes, camouflage TLS
    - Imitation de trafic TLS, usage de domaines populaires (vk.com, baidu, naver)

  - Comportements distinctifs :
    - Tromperie via fausses recrues (LinkedIn/job offers)
    - Évolution constante pour semer la confusion : adoption de symboles russes, outils Enigma Protector, fausses activités russes dès 2016
    - Infrastructure récurrente : bien ciblée mais réutilisée, permettant la détection

  ### Indicateurs de compromission
  - Hashs de fichiers :
    - SHA256 : 875B0CBAD25E04A255B13F86BA361B58453B6F3C5CC11ACA2DB573C656E64E24
    - MD5 : 15DC6A28B875B4706BCC0DB4A026AEB0

  - Domains & URLs :
    - www.addfriend.kr (C2), addfriend.kr/board/userfiles/temp/index.html

  - Adresses IP :
    - 211.239.117.117 (C2, Corée du Sud)
    - 210.52.109.22, 175.45.178.222, 175.45.178.19, …178.97 (infrastructure en RPDC)

  ### Contre-mesures
  - Patchs et gestion des vulnérabilités
    - cmbre contre EternalBlue et exploits connus.
    
  - MFA obligatoire
    - surtout pour accès privés ou finance.
  
  - Segmentation réseau
    - limiter la propagation via SMB, RDP.
  
  - EDR avec détection de comportements
    - surveiller PowerShell, keyloggers, communication anormale.
  
  - Filtrage TLS/anomalies réseau
    - détection de faux TLS, trafic vers addfriend.kr, IP C2 connus.
  
  - Sensibilisation phishing
    - formation sur ingénierie sociale, fausses offres LinkedIn.
  
  - Threat Intelligence & IOCs
    - intégrer listes de domaines, IPs, hashs, infra habituelle (C2 multi-couches).
  
  - Plan de réponse & backup
    - préparation, tests, sauvegardes isolées.

  ` },
  { id: '21', content: `
  # Lapsus$

  ### Identification du groupe
  - 

  ### Historique des opérations
  - 

  ### Arsenal technique
  - 

  ### Victimologie
  - 

  ### Particularités
  - 

  ### Indicateurs de compromission
  - 

  ### Contre-mesures
  - 

  ` },
  { id: '22', content: `
  # Conti/BlackCat

  ### Identification du groupe
  - 

  ### Historique des opérations
  - 

  ### Arsenal technique
  - 

  ### Victimologie
  - 

  ### Particularités
  - 

  ### Indicateurs de compromission
  - 

  ### Contre-mesures
  - 

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
