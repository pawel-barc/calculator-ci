# Calculator CI

Projet pédagogique pour apprendre les bases de l’intégration continue (CI)
avec GitHub Actions.

## Objectif du projet

L’objectif est de mettre en place une pipeline CI simple qui :

- récupère le code source,
- installe l’environnement,
- exécute des tests automatiquement à chaque push sur la branche `main`.

## Structure du projet

## Fonctionnalités

- Fonction `add(a, b)` pour additionner deux nombres
- Test automatique de la fonction
- Pipeline CI déclenchée automatiquement via GitHub Actions

## Lancer le projet en local

Prérequis : Node.js installé

```bash
npm install
npm test

## Notifications Google Chat

La pipeline CI est configurée pour envoyer des notifications automatiques
dans un espace Google Chat à chaque exécution.

### Fonctionnement

- Après chaque `push` sur la branche `main`, la pipeline CI est déclenchée
- Si les tests réussissent, un message de succès est envoyé
- Si les tests échouent, un message d’échec est envoyé avec les informations du commit

### Sécurité

L’URL du webhook Google Chat est stockée de manière sécurisée dans les
**GitHub Secrets** et n’est jamais exposée dans le code source.

Cette fonctionnalité permet au groupe d’être informé en temps réel de l’état
du projet et améliore la collaboration au sein de l’équipe.
```
