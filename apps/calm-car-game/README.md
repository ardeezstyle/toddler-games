# Calm Car Game

A simple, playful car game designed for young children. The application provides a calm, distraction-free experience where children can explore and interact with cars through an intuitive interface.

## Overview

Calm Car Game is designed around simple interactions and a child-friendly visual experience.

The application aims to provide:
- A simple and intuitive interface suitable for young children.
- Large, easy-to-use touch interactions.
- A playful car-themed experience.
- A calm environment without unnecessary distractions.

## Tech stack

- **React** – UI components and application structure.
- **TypeScript** – Type safety.
- **Vite** – Development server and production builds.
- **CSS** – Styling and responsive layouts.

## Getting started

### Prerequisites

- Node.js
- Yarn Classic (1.x)
- Git

### Install dependencies

Run this from the repository root:

```bash
yarn install
```

### Start the development server

Run this from the repository root:

```bash
yarn workspace calm-car-game dev
```

The development server is configured to use `--host 0.0.0.0`, allowing access from other devices on the same Wi-Fi network.

For instructions on accessing the game on a tablet, see [Local Development and Tablet Testing](../../docs/local-development.md).

## Build and validation

### Run lint

```bash
yarn workspace calm-car-game lint
```

### Build for production

```bash
yarn workspace calm-car-game build
```

The production build is generated in:

```text
apps/calm-car-game/dist/
```

### Preview the production build

```bash
yarn workspace calm-car-game preview
```

## Deployment

Calm Car Game is published using [Netlify](https://www.netlify.com/) and connected to the GitHub repository.

Published application:

[https://swarup-car-game.netlify.app](https://swarup-car-game.netlify.app)

Changes pushed to the configured GitHub deployment branch can trigger an automatic Netlify build and deployment.

For deployment configuration and instructions, see [GitHub and Netlify Deployment](../../docs/netlify-deployment.md).

## Project structure

```text
apps/calm-car-game/
├── public/
├── src/
├── index.html
├── package.json
└── README.md
```

This is a high-level overview; the source structure may evolve as the application grows.

---

**Calm Car Game** — A little space for playful exploration.