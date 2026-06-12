# 🎸 Guitar Aura

An intelligent, modern assistant designed to optimize guitar practice routines. `guitar-aura` helps musicians manage practice timers, catalog chords, analyze technical execution (such as left-hand focus), and orchestrate loop sequences seamlessly.

Built with a cutting-edge frontend architecture focused on speed, strict type safety, and automated quality gates.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router) powered by **Turbopack**
- **Library:** React 19
- **State Management:** Zustand 5
- **Styling:** Tailwind CSS v4 + Radix UI Primitives
- **Icons:** Lucide React
- **Testing:** Vitest + React Testing Library + JSDOM

---

## 🏗️ Architecture & Automated Quality Gates

This repository enforces a strict, automated pipeline to prevent code degradation (**code rot**) and ensure continuous delivery standards.

### 🛡️ Local Protection (Husky + lint-staged)

Every time a `git commit` is initiated, **Husky** intercepts the transaction and triggers **lint-staged** to run the following checks _only_ on the modified files in the staging area:

1. **Prettier:** Code formatting and automatic sorting of Tailwind CSS classes using `prettier-plugin-tailwindcss`.
2. **ESLint:** Static analysis to prevent anti-patterns and unused code blocks.
3. **Vitest (Chirurgical Testing):** Runs only the unit tests directly related to the modified files via `vitest related --run`.

### 🔍 Dead Code Elimination

- **Knip:** Configured to scan the dependency graph and structural imports. Run `npm run knip` to identify orphan files, unused exports, or dead dependencies in the `package.json`.

### 🚀 CI/CD & Environments (Vercel)

The deployment pipeline tracks automated workflows on GitHub Actions, isolating releases into two main prediction layers:

- **Staging Layer (`stg` branch):** Automatically deploys isolated preview versions.
- **Production Layer (`main` branch):** Deploys the stable production environment visible to the end user.

---

## ⚙️ Development & Available Scripts

In the project directory, you can run the following commands:

### `npm run dev`

Runs the app in development mode using Next.js Turbopack compiler.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the application for production to the `.next` directory.

### `npm run lint`

Runs ESLint to inspect code quality and rule violations.

### `npm run test`

Launches the test runner (**Vitest**) in interactive watch mode.

### `npm run test:ci`

Runs all unit tests in a single pass. Ideal for GitHub Actions pipelines.

### `npm run knip`

Analyzes the project to find unused files, types, exports, and dependencies.

---

## 📂 Project Structure Overview

```text
├── .github/workflows/   # CI/CD Deployment Pipelines
├── .husky/              # Git Hooks (Pre-commit automation)
├── app/                 # Next.js App Router (Pages, Layouts, and Views)
├── components/          # React Components (Atomic design split)
│   ├── ui/              # Shadcn Primitives (Design System)
│   └── [feature]/       # Feature-driven UI blocks (e.g., loop-sequence)
├── hooks/               # Custom React Hooks
├── lib/                 # Shared utilities and configurations
├── store/               # Global State Management (Zustand Slices)
├── types/               # Global TypeScript definitions and Domain types
├── vitest.config.ts     # Vitest configuration engine
└── knip.json            # Dead code analyzer layout
```
