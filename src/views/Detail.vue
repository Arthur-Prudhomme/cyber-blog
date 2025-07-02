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
  ` },
  { id: '14', content: `
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
  # Target (2013)
  ### Vulnérabilité exploitée
  
  ### Déroulement de l'attaque
  
  ### Victimes
  
  ### Impacts
  
  ### Coût et taille de l'entreprise
  
  ### Comment s'en protéger ?
  
  ### Pourquoi est-ce difficile à éviter ?
  
  ### Dans le contexte de votre entreprise, que feriez-vous pour l'éviter ?
  ` },
  { id: '19', content: `
  # 
  ### Vulnérabilité exploitée
  
  ### Déroulement de l'attaque
  
  ### Victimes
  
  ### Impacts
  
  ### Coût et taille de l'entreprise
  
  ### Comment s'en protéger ?
  
  ### Pourquoi est-ce difficile à éviter ?
  
  ### Dans le contexte de votre entreprise, que feriez-vous pour l'éviter ?
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

.content{
  text-align: initial;
}
</style>
