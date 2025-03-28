# tapakila_admin

## Description

**tapakila_admin** est une application d'administration développée en TypeScript, visant à fournir une interface utilisateur efficace pour la gestion des opérations administratives. Le projet est actuellement déployé sur Vercel et accessible à l'adresse suivante : [tapakila-admin.vercel.app](https://tapakila-admin.vercel.app).

## Fonctionnalités

- **Interface utilisateur moderne** : Utilise les dernières technologies web pour offrir une expérience utilisateur fluide.
- **Gestion efficace des données** : Permet aux administrateurs de gérer les données de manière intuitive.
- **Performances optimisées** : Grâce à l'utilisation de Vite et TypeScript, l'application offre des performances élevées.

## Technologies utilisées

- **React Admin** : Framework basé sur React permettant de créer rapidement des interfaces d'administration.
- **TypeScript** : Langage principal du projet, offrant un typage statique et des fonctionnalités modernes.
- **Vite** : Outil de build rapide pour les projets front-end modernes.
- **ESLint** : Utilisé pour maintenir une qualité de code élevée.
- **Prettier** : Assure une mise en forme cohérente du code.

## Structure du projet

```
/tapakila_admin
│── /public                     # Contient les fichiers statiques accessibles publiquement
│── /src                        # Dossier principal contenant le code source de l'application
│   │── /assets/images          # Ressources et images
│   │── /common                 # Composants communs et utilitaires
│   │── /config                 # Fichiers de configuration
│   │── /layout                 # Composants liés à la structure de l'application
│   │── /operations             # Logique métier et traitements
│   │── /providers              # Gestion des contextes et services
│   │── /security/components    # Composants liés à la sécurité
│   │── app.tsx                 # Composant racine de l'application
│   │── main.tsx                # Point d'entrée principal
│── .gitignore                  # Spécifie les fichiers et dossiers à ignorer par Git
│── .prettierrc.json            # Configuration pour Prettier
│── eslint.config.js            # Configuration pour ESLint
│── index.html                  # Page HTML principale de l'application
│── package.json                # Liste les dépendances et les scripts du projet
│── tsconfig.json               # Configuration du compilateur TypeScript
│── vite.config.ts              # Configuration pour Vite
```

## Installation et exécution

1. **Cloner le dépôt** :

   ```bash
   git clone https://github.com/Jey-Vaninah/tapakila_admin.git
   ```

2. **Se déplacer dans le répertoire du projet** :

   ```bash
   cd tapakila_admin
   ```

3. **Installer les dépendances** :

   ```bash
   npm install
   ```

4. **Lancer l'application en mode développement** :

   ```bash
   npm run dev
   ```

   L'application sera accessible à l'adresse `http://localhost:5173`.

## Contributeurs

- [Jey-Vaninah](https://github.com/Jey-Vaninah)
- [Tsilavina Andriamiharison](https://github.com/Tsilavina007)
- [Noum's Randrianirina](https://github.com/NomenaFitahiana)

