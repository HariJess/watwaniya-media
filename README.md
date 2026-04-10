# Watwaniya Média - Site Web

Site web professionnel pour **Watwaniya Média**, une agence de communication digitale et de production audiovisuelle.

## 🎯 Caractéristiques

- **Framework**: Next.js 16 (dernière version stable)
- **Langage**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icônes**: Lucide React
- **Design**: Responsive et moderne
- **Structure**: Composants réutilisables bien organisés

## 📁 Structure du Projet

```
.
├── app/
│   ├── layout.tsx          # Layout principal (métadonnées, structure HTML)
│   ├── page.tsx            # Page d'accueil (assemblage des composants)
│   └── globals.css         # Styles globaux et thème
├── components/
│   └── home/               # Composants de la page d'accueil
│       ├── header.tsx      # Navigation et en-tête
│       ├── hero.tsx        # Section héro principale
│       ├── presentation.tsx # Section "Qui sommes-nous"
│       ├── services.tsx    # Grille des services/expériences
│       ├── realizations.tsx # Portfolio et réalisations
│       ├── cta-section.tsx # Section "Pourquoi choisir Watwaniya"
│       ├── contact-section.tsx # Section CTA de contact
│       └── footer.tsx      # Pied de page
├── public/                 # Assets publiques (images, favicon, etc.)
└── package.json           # Dépendances du projet
```

## 🚀 Démarrage Rapide

### Installation

```bash
# Cloner ou télécharger le projet
# Installer les dépendances
pnpm install

# Démarrer le serveur de développement
pnpm dev
```

Le site sera accessible à `http://localhost:3000`

## 📦 Dépendances Principales

- **next**: Framework React pour la production
- **react & react-dom**: Bibliothèque UI
- **tailwindcss**: Framework CSS utilitaire
- **lucide-react**: Icônes SVG
- **typescript**: Typage statique pour JavaScript

## 🎨 Sections du Site

### 1. **Header** (`header.tsx`)
- Navigation responsive avec menu mobile
- Logo Watwaniya
- Bouton de contact CTA

### 2. **Hero** (`hero.tsx`)
- Section principale avec titre et sous-titre
- Call-to-action (CTA) avec boutons d'action
- Texte informatif sur l'agence

### 3. **Présentation** (`presentation.tsx`)
- Section "Qui sommes-nous"
- Description de l'agence et sa mission
- Logo/marque visuelle

### 4. **Services** (`services.tsx`)
- Grille de 6 cartes de services
- Icônes Lucide React
- Hover effect animé

### 5. **Réalisations** (`realizations.tsx`)
- Portfolio en grille 3x3
- Images avec overlay au survol
- Bouton play animé pour les vidéos
- Catégorisation des projets

### 6. **CTA Section** (`cta-section.tsx`)
- "Pourquoi choisir Watwaniya Média"
- Liste numérotée des raisons (1-5)
- Image/placeholder du côté droit

### 7. **Contact** (`contact-section.tsx`)
- Section finale de contact
- Boutons CTA principaux (Nous contacter, Appeler)
- Message d'appel à l'action

### 8. **Footer** (`footer.tsx`)
- Navigation et liens
- Informations de contact (téléphone, email, adresse)
- Liens vers réseaux sociaux
- Mentions légales

## 🎨 Palette de Couleurs

- **Primaire**: Orange (`#ff6b35` / `orange-500`)
- **Fond**: Noir profond (`#000000`)
- **Texte Principal**: Blanc (`#ffffff`)
- **Texte Secondaire**: Gris (`#9ca3af` / `#6b7280`)
- **Accents**: Gris sombre pour les borders

## 📱 Responsive Design

Tous les composants sont entièrement responsifs:
- **Mobile**: Adaptation complète (< 640px)
- **Tablet**: Optimisation intermédiaire (640px - 1024px)
- **Desktop**: Expérience optimale (> 1024px)

## ⚙️ Configuration

### Métadonnées (SEO)
À modifier dans `app/layout.tsx`:
- Title: "Watwaniya Média - Agence de Communication Digitale"
- Description: Description du site pour les moteurs de recherche
- Icons: Icônes personnalisées (à ajouter dans `/public`)

### Tailwind CSS
Configuration dans `tailwind.config.ts` - déjà configurée avec les couleurs de la marque.

## 🚀 Déploiement

### Vercel (Recommandé)
```bash
# Connecter votre repo GitHub
# Déployer automatiquement depuis Vercel Dashboard
```

### Build
```bash
pnpm build
pnpm start
```

## 📝 Points à Personnaliser

- [ ] Remplacer les images placeholders par les vraies images
- [ ] Ajouter les logo et favicon en `/public`
- [ ] Mettre à jour les numéros de téléphone
- [ ] Ajouter les vrais emails de contact
- [ ] Mettre à jour les textes avec le contenu réel
- [ ] Ajouter les réalisations et portfolio réels
- [ ] Intégrer un formulaire de contact fonctionnel
- [ ] Ajouter les liens réseaux sociaux réels

## 💡 Conseils de Personnalisation

1. **Images**: Remplacer `/placeholder.svg` par des images réelles
2. **Couleurs**: Les couleurs sont basées sur orange-500 (#ff6b35) - facilement modifiable dans Tailwind
3. **Textes**: Tous les textes sont dans les composants JSX
4. **Icônes**: Utiliser le site [lucide.dev](https://lucide.dev) pour plus d'icônes

## 🔗 Liens Utiles

- [Documentation Next.js 16](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [Vercel](https://vercel.com/)

---

**Créé avec v0** - Un assistant IA pour construire des projets web modernes.
